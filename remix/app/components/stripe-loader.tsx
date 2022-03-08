import { FC, ReactNode } from "react";
import { Elements } from "@stripe/react-stripe-js";
import { useStripeConfig } from "../hooks/useStripeConfig";
import { useStripeLoader } from "../hooks/useStripeLoader";

interface StripeLoaderProps {
  loading: ReactNode;
}

export const StripeLoader: FC<StripeLoaderProps> = ({ loading, children }) => {
  const stripeConfig = useStripeConfig();
  const stripeLoader = useStripeLoader(stripeConfig);

  if (stripeConfig.isLoading || !stripeLoader) {
    return <>{loading}</>;
  }

  return <Elements stripe={stripeLoader}>{children}</Elements>;
};
