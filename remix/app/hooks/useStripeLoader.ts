import { useState, useEffect } from "react";
import { useStripeConfig } from "./useStripeConfig";
import { loadStripe } from "@stripe/stripe-js";

export function useStripeLoader(
  stripeConfig: ReturnType<typeof useStripeConfig>
) {
  const [stripeLoader, setStripeLoader] = useState(null);
  useEffect(() => {
    if (stripeConfig?.data && !stripeLoader) {
      setStripeLoader(
        loadStripe(
          stripeConfig.data.paymentProviders.stripe.config.publishableKey
        )
      );
    }
  }, [stripeConfig, stripeLoader]);
  return stripeLoader;
}
