import { useBasket } from "../components/basket";
import { Form } from "remix";
import { Payments } from "../components/payments";
import { useState } from "react";
import { CheckoutModelInput } from "../service-api/types.generated";

export default function Checkout() {
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    postalCode: "",
  });

  const { firstName, lastName, email, street, city, postalCode } = state;

  const basket = useBasket();

  function getURL(path: string) {
    if (typeof window === "undefined") return "";
    return `${location?.protocol}//${location?.host}${path}`;
  }

  const checkoutModel: CheckoutModelInput = {
    basketModel: basket.basketModel,
    customer: {
      firstName,
      lastName,
      addresses: [
        { type: "billing", email },
        {
          type: "delivery",
          street,
          city,
          postalCode,
        },
      ],
    },
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
            onChange={(e) => setState({ ...state, firstName: e.target.value })}
          />
          <input
            type="text"
            name="Last Name"
            placeholder="Last name"
            className="w-full"
            onChange={(e) => setState({ ...state, lastName: e.target.value })}
          />
          <input
            type="text"
            name="Email"
            placeholder="Email"
            className="w-full"
            onChange={(e) => setState({ ...state, email: e.target.value })}
          />
           <input
            type="text"
            name="Street"
            placeholder="Street"
            className="w-full"
            onChange={(e) => setState({ ...state, street: e.target.value })}
          />
           <input
            type="text"
            name="City"
            placeholder="City"
            className="w-full"
            onChange={(e) => setState({ ...state, city: e.target.value })}
          />
           <input
            type="text"
            name="Postal Code"
            placeholder="Postal Code"
            className="w-full"
            onChange={(e) => setState({ ...state, postalCode: e.target.value })}
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
