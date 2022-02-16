import * as Types from './types.generated';

import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type LoginMutationVariables = Types.Exact<{
  email: Types.Scalars['String'];
  redirectURLAfterLogin: Types.Scalars['String'];
}>;


export type LoginMutation = (
  { __typename?: 'Mutation' }
  & { user?: Types.Maybe<(
    { __typename?: 'UserMutations' }
    & { sendMagicLink: (
      { __typename?: 'SendMagicLinkResponse' }
      & Pick<Types.SendMagicLinkResponse, 'success' | 'error'>
    ) }
  )> }
);


export const LoginDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"mutation","name":{"kind":"Name","value":"Login"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"email"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"redirectURLAfterLogin"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"user"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"sendMagicLink"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"email"},"value":{"kind":"Variable","name":{"kind":"Name","value":"email"}}},{"kind":"Argument","name":{"kind":"Name","value":"redirectURLAfterLogin"},"value":{"kind":"Variable","name":{"kind":"Name","value":"redirectURLAfterLogin"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"success"}},{"kind":"Field","name":{"kind":"Name","value":"error"}}]}}]}}]}}]} as unknown as DocumentNode<LoginMutation, LoginMutationVariables>;