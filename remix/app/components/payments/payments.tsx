import { useState } from "react";

import { Stripe } from "./stripe";
import { PaymentProps } from "./types";

export const Payments = (props: PaymentProps) => {
  const [payment, setPayment] = useState("");

  return (
    <>
      <div>
        <button
          onClick={() => setPayment("stripe")}
          className="w-full bg-text text-primary py-3 font-semibold mt-5"
        >
          Stripe
        </button>
      </div>

      {payment === "stripe" && <Stripe {...props} />}
    </>
  );
};
