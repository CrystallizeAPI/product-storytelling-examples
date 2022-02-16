import { useBasket } from "../components/basket";
import { Form } from "remix";
import { Payments } from "../components/payments";
import { useState } from "react";
import { CheckoutModelInput } from "../service-api/types.generated";

export default function Checkout() {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const basket = useBasket();

  function getURL(path: string) {
    if (typeof window === "undefined") return "";
    return `${location?.protocol}//${location?.host}${path}`;
  }

  const checkoutModel: CheckoutModelInput = {
    basketModel: basket.basketModel,
    customer: { firstName, lastName, addresses: [{ type: "billing", email }] },
    confirmationURL: getURL(`/confirmation/{crystallizeOrderId}`),
    checkoutURL: getURL(`/checkout`),
    termsURL: getURL(`/terms`),
  };

  return (
    <div className="p-10 mx-auto bg-background1 w-128 mt-20">
      <h1 className="text-text text-3xl font-bold mb-10 text-center">
        Checkout
      </h1>
      <div className="mx-auto">
        <Form method="post" className="flex flex-wrap gap-5">
          <input
            type="text"
            name="First Name"
            placeholder="First name"
            className="w-full"
            onChange={(e) => setFirstName(e.currentTarget.value)}
          />
          <input
            type="text"
            name="Last Name"
            placeholder="Last name"
            className="w-full"
            onChange={(e) => setLastName(e.currentTarget.value)}
          />
          <input
            type="text"
            name="Email"
            placeholder="Email"
            className="w-full"
            onChange={(e) => setEmail(e.currentTarget.value)}
          />
        </Form>
      </div>
      <Payments
        checkoutModel={checkoutModel}
        onSuccess={() => console.log("success")}
        onError={() => {}}
      />
    </div>
  );
}
