/**
 * The landing page for when users click the
 * magic link button in the email.
 */

import userService from "../../../src/services/user-service";

export default async function loginMagicLink(req, res) {
  try {
    /**
     * Validate the JWT token and extract the email
     * address and the redirectURLAfterLogin URL to send the
     * user to afterwards
     */
    const {
      success,
      signedLoginToken,
      signedLoginRefreshToken,
      redirectURLAfterLogin,
    } = await userService.validateMagicLinkToken(req.query.token);

    if (success) {
      /**
       * In order to get the login cookie to be sent for all
       * browsers, they need to share the top level domain.
       * See: https://web.dev/samesite-cookies-explained/
       * Example:
       * Website:         my-website.com
       * Service API: api.my-website.com
       */
      // res.setHeader(
      //   "Set-Cookie",
      //   `${userService.COOKIE_USER_TOKEN_NAME}=${signedLoginToken}; HttpOnly; Max-Age=86400; Path=/; SameSite=None; Secure; Domain=.my-website.com`
      // );

      res.setHeader("Set-Cookie", [
        `${userService.COOKIE_USER_TOKEN_NAME}=${signedLoginToken}; HttpOnly; Max-Age=${userService.COOKIE_USER_TOKEN_MAX_AGE}; Path=/`,
        `${userService.COOKIE_REFRESH_TOKEN_NAME}=${signedLoginRefreshToken}; HttpOnly; Max-Age=${userService.COOKIE_REFRESH_TOKEN_MAX_AGE}; Path=/`,
      ]);
      // res.setHeader(
      //   "Set-Cookie",
      //   `${userService.COOKIE_REFRESH_TOKEN_NAME}=${signedLoginRefreshToken}; HttpOnly; Max-Age=${userService.COOKIE_REFRESH_TOKEN_MAX_AGE}; Path=/`
      // );
      res.setHeader("Location", redirectURLAfterLogin);

      return res.status(302).send("User is authenticated");
    } else {
      return res.status(400).send("User could not be authenticated");
    }
  } catch (error) {
    console.log(error);

    res
      .status(500)
      .send("Something went wrong when trying to authenticated the user");
  }
}
