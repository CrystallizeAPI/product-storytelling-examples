import { CheckoutModelInput } from "../../service-api/types.generated";

export interface PaymentProps {
  checkoutModel: CheckoutModelInput;
  onSuccess?: ({ orderId: string }) => void;
  onError?: (error: Error) => void;
}
