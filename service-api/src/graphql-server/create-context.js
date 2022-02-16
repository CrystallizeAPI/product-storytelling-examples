const userService = require("../services/user-service");
const getHost = require("../lib/get-host");

module.exports = function createContext({
  apiPathPrefix,
  normaliseRequest,
  refreshUserToken,
}) {
  return function context(args) {
    const { cookies, headers } = normaliseRequest(args);

    const user = userService.authenticate(
      cookies[userService.COOKIE_USER_TOKEN_NAME]
    );

    // Refresh the user token (if available)
    if (user && refreshUserToken) {
      const newUserToken = userService.validateRefreshToken({
        refreshToken: cookies[userService.COOKIE_REFRESH_TOKEN_NAME],
        email: user.email,
      });
      if (newUserToken) {
        refreshUserToken(args, newUserToken);
      }
    }

    // Determine the URL for webhook callbacks (ex: https://service-api.example.com/api)
    const publicHost = getHost({ headers }) + apiPathPrefix;

    /**
     * serviceCallbackHost is used for third party services callbacks
     * It will be used in e.g. payment provider services callbacks
     * when async operations are finished
     *
     * Example for local development:
     *  - publicHost: http://localhost:3001/api
     *  - serviceCallbackHost: https://abcdefgh12345.ngrok.io/api
     *
     * Example for prod development:
     *  - publicHost: https://my-service-api.shop.com/api
     *  - serviceCallbackHost: https://my-service-api.shop.com/api
     */
    let serviceCallbackHost = process.env.SERVICE_CALLBACK_HOST;
    if (serviceCallbackHost) {
      if (!serviceCallbackHost.endsWith(apiPathPrefix)) {
        serviceCallbackHost += apiPathPrefix;
      }
    } else {
      serviceCallbackHost = publicHost;
    }

    return {
      user,
      publicHost,
      serviceCallbackHost,
    };
  };
};
