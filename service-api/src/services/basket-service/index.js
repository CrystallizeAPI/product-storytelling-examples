// Calculate the totals
function getTotals({ cart, vatType }) {
  return cart.reduce(
    (acc, curr) => {
      const { quantity, price } = curr;
      if (price) {
        const priceToUse = price.discounted || price;
        acc.gross += priceToUse.gross * quantity;
        acc.net += priceToUse.net * quantity;
        acc.currency = price.currency;
      }

      return acc;
    },
    { gross: 0, net: 0, tax: vatType, discount: 0, currency: "N/A" }
  );
}

module.exports = {
  async get({ basketModel, context }) {
    const { locale, voucherCode, ...basketFromClient } = basketModel;

    /**
     * Resolve all the voucher codes to valid vouchers for the user
     */
    let voucher;
    if (voucherCode) {
      const voucherService = require("../voucher-service");
      const response = await voucherService.get({ code: voucherCode, context });

      if (response.isValid) {
        voucher = response.voucher;
      }
    }

    /**
     * Get all products from Crystallize
     */
    const {
      getProductsFromCrystallize,
    } = require("./get-products-from-crystallize");
    const productDataFromCrystallize = await getProductsFromCrystallize({
      skus: basketFromClient.cart.map((p) => p.sku),
      language: locale.crystallizeCatalogueLanguage,
    });

    let vatType;

    /**
     * Compose the complete cart items enriched with
     * data from Crystallize
     */
    const cart = basketFromClient.cart
      .map((itemFromClient) => {
        const product = productDataFromCrystallize.find((p) =>
          p.variants.some((v) => v.sku === itemFromClient.sku)
        );

        if (!product) {
          return null;
        }

        vatType = product.vatType;

        const variant = product.variants.find(
          (v) => v.sku === itemFromClient.sku
        );
        const { price, currency } =
          variant.priceVariants.find(
            (pv) => pv.identifier === itemFromClient.priceVariantIdentifier
          ) || variant.priceVariants.find((p) => p.identifier === "default");

        const gross = price;
        const net = (price * 100) / (100 + vatType.percent);

        return {
          productId: product.id,
          productVariantId: variant.id,
          path: product.path,
          quantity: itemFromClient.quantity || 1,
          vatType,
          price: {
            gross,
            net,
            tax: vatType,
            currency,
          },
          ...variant,
        };
      })
      .filter((p) => !!p);

    // Calculate the totals
    let total = getTotals({ cart, vatType });

    // Add a voucher
    let cartWithVoucher = cart;
    if (cart.length > 0 && voucher) {
      const {
        calculateVoucherDiscountAmount,
      } = require("./calculate-voucher-discount-amount");
      const discountAmount = calculateVoucherDiscountAmount({
        voucher,
        amount: total.gross,
      });

      // Reduce the price for each item
      cartWithVoucher = cart.map((cartItem) => {
        const portionOfTotal =
          (cartItem.price.gross * cartItem.quantity) / total.gross;

        /**
         * Each cart item gets a portion of the voucher that
         * is relative to their own portion of the total discount
         */
        const portionOfDiscount = discountAmount * portionOfTotal;

        const gross =
          cartItem.price.gross - portionOfDiscount / cartItem.quantity;
        const net = (gross * 100) / (100 + cartItem.vatType.percent);

        return {
          ...cartItem,
          price: {
            ...cartItem.price,
            gross,
            net,
          },
        };
      });

      // Adjust totals
      total = getTotals({ cart: cartWithVoucher, vatType });
      total.discount = discountAmount;
    }

    return {
      voucher,
      cart: cartWithVoucher,
      total,
    };
  },
};
