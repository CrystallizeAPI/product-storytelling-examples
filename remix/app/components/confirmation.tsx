import { useEffect } from "react";
import { useBasket } from "./basket";

export default function Confirmation({ order, success }) {
  const basket = useBasket();

  if (success) {
    basket.actions.empty();
  }

  useEffect(() => {
    if (!order) {
      const t = setTimeout(() => window.location.reload(), 5000);

      return () => clearTimeout(t);
    }
  }, [order]);

  if (!order) {
    return <p>Loading...</p>;
  }

  const cart = order.cart.map((item) => ({
    ...item,
    image: {
      url: item.imageUrl,
    },
  }));

  const { total } = order;

  return (
    <div className="w-auth p-20 bg-background3 mx-auto mt-20 text-text">
      <div>
        <h1 className="font-bold text-3xl mb-6">Order Confirmation</h1>
        <p className="mb-5">We’ve received your order #{order.id}.</p>
        <div>
          {cart.map((item, index) => {
            return (
              <div key={index} className="flex justify-between mb-4">
                <div>
                  <p>
                    {item.name} x {item.quantity}
                  </p>
                </div>
                <p>${item.price.gross * item.quantity}</p>
              </div>
            );
          })}
          <div className="flex flex-col gap-3 border-t-2 pt-5">
            <div className="flex justify-between">
              <p>Subtotal</p>
              <p>${total.gross}</p>
            </div>
            <div className="flex justify-between">
              <p>Tax</p>
              <p>${total.net - total.gross}</p>
            </div>
            <div className="flex justify-between">
              <p className="font-bold">Total</p>
              <p>${total.net}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
