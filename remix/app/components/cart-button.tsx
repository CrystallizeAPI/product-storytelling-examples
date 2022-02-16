import { useBasket } from "./basket";

export const AddToCart = ({ variant }) => {
  const basket = useBasket();
  const buy = () => {
    basket?.actions?.addItem({
      id: variant.id,
      sku: variant.sku,
      path: variant.path,
      priceVariantIdentifier: "default",
      stock: variant.stock,
    });
  };

  return <div onClick={() => buy()}>ADD TO CART</div>;
};
