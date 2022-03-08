import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type ConfirmStripeOrderMutationVariables = Types.Exact<{
  checkoutModel: Types.CheckoutModelInput;
  paymentIntentId: Types.Scalars['String'];
}>;


export type ConfirmStripeOrderMutation = (
  { __typename?: 'Mutation' }
  & { paymentProviders: (
    { __typename?: 'PaymentProvidersMutations' }
    & { stripe: (
      { __typename?: 'StripeMutations' }
      & { confirmOrder: (
        { __typename?: 'StripeConfirmOrderResponse' }
        & Pick<Types.StripeConfirmOrderResponse, 'success' | 'orderId'>
      ) }
    ) }
  ) }
);


export const ConfirmStripeOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"confirmStripeOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"checkoutModel"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"CheckoutModelInput"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"paymentIntentId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stripe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"confirmOrder"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"checkoutModel"},"value":{"kind":"Variable","name":{"kind":"Name","value":"checkoutModel"}}},{"kind":"Argument","name":{"kind":"Name","value":"paymentIntentId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"paymentIntentId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"orderId"}}]}}]}}]}}]}}]} as unknown as DocumentNode<ConfirmStripeOrderMutation, ConfirmStripeOrderMutationVariables>;