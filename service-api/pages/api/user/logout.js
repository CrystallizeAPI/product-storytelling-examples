import userService from "../../../src/services/user-service";

/**
 * Logout the current user
 * Supports a redirect in the query, like this:
 * http://localhost:3001/api/user/logout?redirect=${encodeURIComponent('https://example.com')}
 * http://localhost:3001/api/user/logout?redirect=http%3A%2F%2Fexample.com
 * -> will redirect to https://example.com
 */

export default function logout(req, res) {
  res.setHeader(
    "Set-Cookie",
    `${userService.COOKIE_USER_TOKEN_NAME}=deleted; HttpOnly; Path=/; Expires=Thu, 01 Jan 1970 00:00:00 GMT`
  );

  const { redirect } = req.query;
  if (redirect) {
    res.setHeader("Location", decodeURIComponent(redirect));
    res.status(302);
  }

  res.send("Logged out!");
}
