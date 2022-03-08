import { useBasket } from "../components/basket";
import { Link } from "remix";
import { ItemSortField } from "~/crystallize/types.generated";

export default function Cart() {
  let basket = useBasket();
  if (!basket.cart.length) {
    return (
      <div className="py-20">
        <h1 className="text-4xl font-bold text-text">The cart is empty.</h1>
      </div>
    );
  }
  return (
    <div className="py-20 text-text w-auth mx-auto">
      <h1 className="text-4xl font-bold  mb-10">
        Your shopping cart ({basket.cart.length})
      </h1>
      <div className="flex flex-col gap-5 bg-background1 p-20">
        {basket.cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex flex-col">
              <p className="font-semibold text-xl">
                {item.name} × {item.quantity}
              </p>
              <div className="flex gap-3">
                {item.attributes?.map((attr, index) => (
                  <div
                    className="even:after:content-['\00a0-'] even:before:content-['-\00a0']"
                    key={index}
                  >
                    {attr.value}
                  </div>
                ))}
              </div>
            </div>
            <p>${item.price.gross * item.quantity}</p>
          </div>
        ))}
        <div className="flex justify-between items-center border-t-2 border-text pt-4">
          <p className="font-semibold text-xl">Total</p>
          <p>${basket.total.gross}</p>
        </div>
        <Link
          to="/checkout"
          className="bg-text text-primary py-3 mt-10 rounded font-semibold text-center"
        >
          Go to Checkout
        </Link>
      </div>
    </div>
  );
}
