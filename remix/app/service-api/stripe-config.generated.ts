import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type StripeConfigQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type StripeConfigQuery = (
  { __typename?: 'Query' }
  & { paymentProviders: (
    { __typename?: 'PaymentProvidersQueries' }
    & { stripe: (
      { __typename?: 'PaymentProvider' }
      & Pick<Types.PaymentProvider, 'config'>
    ) }
  ) }
);


export const StripeConfigDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"StripeConfig"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"paymentProviders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stripe"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"config"}}]}}]}}]}}]} as unknown as DocumentNode<StripeConfigQuery, StripeConfigQueryVariables>;