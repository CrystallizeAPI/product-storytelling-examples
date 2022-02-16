module.exports = function crystallizeToKlarnaOrderModel(basket) {
  const { total, cart } = basket;

  const order_amount = total.gross * 100;

  return {
    order_amount,
    order_tax_amount: order_amount - total.net * 100,
    order_lines: cart.map(
      ({
        sku,
        quantity,
        price,
        name,
        productId,
        productVariantId,
        imageUrl,
      }) => {
        const { gross, net, tax } = price;
        const unit_price = gross * 100;

        if (sku.startsWith("--voucher--")) {
          return {
            reference: sku,
            name,
            quantity: 1,
            unit_price,
            total_amount: unit_price,
            total_tax_amount: 0,
            tax_rate: 0,
            type: "discount",
          };
        }

        const total_amount = unit_price * quantity;
        const total_tax_amount = total_amount - net * quantity * 100;

        return {
          name,
          reference: sku,
          unit_price,
          quantity,
          total_amount,
          total_tax_amount,
          type: "physical",
          tax_rate: tax.percent * 100,
          image_url: imageUrl,
          merchant_data: JSON.stringify({
            productId,
            productVariantId,
            taxGroup: tax,
          }),
        };
      }
    ),
  };
};
