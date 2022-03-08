import { useQuery } from "react-query";
import { serviceAPIClient } from "../clients";
import {
  StripeConfigQuery,
  StripeConfigDocument,
} from "../service-api/stripe-config.generated";

export function useStripeConfig() {
  const stripeConfig = useQuery("stripeConfig", () =>
    serviceAPIClient.request<StripeConfigQuery>(StripeConfigDocument)
  );
  return stripeConfig;
}
