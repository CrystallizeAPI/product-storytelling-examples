import { Link } from "remix";

export const Notification = () => {
  return (
    <div className="absolute bottom-0 right-0">
      <p>Dounot added to basket</p>
      <div className="flex">
        <Link to="/">Continue shopping</Link>
        <Link to="/cart">Go to cart</Link>
      </div>
    </div>
  );
};
