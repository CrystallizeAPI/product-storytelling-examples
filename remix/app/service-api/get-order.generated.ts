import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type GetOrderQueryVariables = Types.Exact<{
  id: Types.Scalars['String'];
}>;


export type GetOrderQuery = (
  { __typename?: 'Query' }
  & { orders: (
    { __typename?: 'OrderQueries' }
    & Pick<Types.OrderQueries, 'get'>
  ) }
);


export const GetOrderDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetOrder"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"id"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"orders"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"get"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"id"},"value":{"kind":"Variable","name":{"kind":"Name","value":"id"}}}]}]}}]}}]} as unknown as DocumentNode<GetOrderQuery, GetOrderQueryVariables>;