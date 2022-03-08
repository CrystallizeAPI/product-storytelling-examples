const createContext = require("./create-context");
const resolvers = require("./resolvers");
const typeDefs = require("./type-defs");

module.exports = function createGraphqlServerConfig({
  apiPathPrefix = "",
  refreshUserToken,
  normaliseRequest,
}) {
  const context = createContext({
    apiPathPrefix,
    refreshUserToken,
    normaliseRequest,
  });

  return {
    context,
    resolvers,
    typeDefs,
    introspection: true,
    playground: {
      endpoint: context.publicHost,
      settings: {
        "request.credentials": "include",
      },
    },
    // Disable subscriptions (not currently supported with ApolloGateway)
    subscriptions: false,
  };
};
