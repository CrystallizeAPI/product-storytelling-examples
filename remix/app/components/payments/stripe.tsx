import { FormEventHandler, useState, useEffect } from "react";
import { useQuery } from "react-query";

import {
  CardElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { serviceAPIClient } from "../../clients";
import { CheckoutModelInput } from "../../service-api/types.generated";
import {
  StripePaymentIntentDocument,
  StripePaymentIntentMutation,
  StripePaymentIntentMutationVariables,
} from "../../service-api/stripe-payment-intent.generated";
import {
  ConfirmStripeOrderDocument,
  ConfirmStripeOrderMutation,
  ConfirmStripeOrderMutationVariables,
} from "../../service-api/stripe-confirm-order.generated";
import { StripeLoader } from "../stripe-loader";
import { PaymentProps } from "./types";
import { Form, useSubmit } from "remix";


interface FormProps extends PaymentProps {
  stripeClientSecret?: string;
  checkoutModel: CheckoutModelInput;
}

export const StripeForm = ({
  stripeClientSecret,
  checkoutModel,
  onSuccess,
  onError = (error) => console.log(error),
}: FormProps) => {
  const stripe = useStripe();
  const elements = useElements();

  const [status, setStatus] = useState<"idle" | "submitting">("idle");

  useEffect(() => {
    if (stripe) {
      stripe.elements({
        fonts: [{ cssSrc: "https://fonts.googleapis.com/css?family=Roboto" }],
      });
    }
  }, [stripe]);

  const handleSubmit: FormEventHandler<HTMLFormElement> = async (event) => {
    event.preventDefault();

    go();

    async function go() {
      setStatus("submitting");
      if (!stripe || !elements) {
        setTimeout(go, 100);
        console.log("checking in")
        return;
      }

      const { customer } = checkoutModel;

      const { error, paymentIntent } = await stripe.confirmCardPayment(
        stripeClientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement),
            billing_details: {
              name: `${customer.firstName} ${customer.lastName}`,
            },
          },
        }
      );

      if (error) {
        onError(new Error(error.message));
        setStatus("idle");
        return;
      }

      // The payment has been processed!
      if (paymentIntent.status !== "succeeded") {
        setStatus("idle");
        return;
      }

      // Show a success message to your customer
      // There's a risk of the customer closing the window before callback
      // execution. Set up a webhook or plugin to listen for the
      // payment_intent.succeeded event that handles any business critical
      // post-payment actions.
      const response = await serviceAPIClient.request<
        ConfirmStripeOrderMutation,
        ConfirmStripeOrderMutationVariables
      >(ConfirmStripeOrderDocument, {
        checkoutModel,
        paymentIntentId: paymentIntent.id,
      });

      const { success, orderId } =
        response.paymentProviders.stripe.confirmOrder;

      if (success) {
        window.location.replace(`/confirmation/${orderId}`);
      } else {
        setStatus("idle");
        onError(new Error("Unknown"));
      }
    }
  };

  return (
    <Form method="post" onSubmit={handleSubmit}>
      <CardElement
        options={{
          style: {
            base: {
              color: "#000",
              fontSize: "14px",
            },
          },
        }}
        className="mt-8 mb-5 border-2 border-text p-5"
      />

      <button
        type="submit"
        disabled={status !== "idle"}
        className="w-full bg-text text-primary py-3 font-semibold mt-5"
      >
        {status === "idle" ? "Pay" : "Hang on..."}
      </button>
    </Form>
  );
};

export const StripePayment = ({ checkoutModel, onSuccess }: PaymentProps) => {
  const stripePaymentIntent = useQuery(
    "paymentIntent",
    () =>
      serviceAPIClient.request<
        StripePaymentIntentMutation,
        StripePaymentIntentMutationVariables
      >(StripePaymentIntentDocument, { checkoutModel }),
    { enabled: false }
  );

  useEffect(() => {
    stripePaymentIntent.refetch();
  }, []);

  const loading = <p>Loading...</p>;

  if (!stripePaymentIntent.data) {
    return loading;
  }

  const stripeClientSecret =
    stripePaymentIntent?.data?.paymentProviders?.stripe?.createPaymentIntent
      ?.client_secret;

  return (
    <StripeLoader loading={loading}>
      <StripeForm
        stripeClientSecret={stripeClientSecret}
        checkoutModel={checkoutModel}
        onSuccess={onSuccess}
      />
    </StripeLoader>
  );
};

export const Stripe = ({ checkoutModel, onSuccess }: PaymentProps) => {
  return <StripePayment checkoutModel={checkoutModel} onSuccess={onSuccess} />;
};
