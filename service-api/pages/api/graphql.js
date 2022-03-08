import { ApolloServer } from "apollo-server-micro";

import cors from "../../lib/cors";

import createGraphQLServerConfig from "../../src/graphql-server";
import userService from "../../src/services/user-service";

const apolloServer = new ApolloServer(
  createGraphQLServerConfig({
    apiPathPrefix: "/api",
    normaliseRequest({ req }) {
      return req;
    },
    refreshUserToken({ res }, newUserToken) {
      res.setHeader(
        "Set-Cookie",
        `${userService.COOKIE_USER_TOKEN_NAME}=${newUserToken}; HttpOnly; Max-Age=${userService.COOKIE_USER_TOKEN_MAX_AGE}; Path=/`
      );
    },
  })
);

export const config = {
  api: {
    bodyParser: false,
  },
};

export default cors(apolloServer.createHandler({ path: "/api/graphql" }));
