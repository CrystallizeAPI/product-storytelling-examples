const invariant = require("invariant");

const crystallize = require("../crystallize");

/**
 * Todo: link to good JWT intro
 */
const JWT_SECRET = process.env.JWT_SECRET;

// Cookie config for user JWTs
const COOKIE_USER_TOKEN_NAME = "user-token";
const COOKIE_USER_TOKEN_MAX_AGE = 60 * 60 * 24;
const COOKIE_REFRESH_TOKEN_NAME = "user-token-refresh";
const COOKIE_REFRESH_TOKEN_MAX_AGE = 60 * 60 * 24 * 7;

async function getUser({ context }) {
  const userInContext = context.user;

  const user = {
    isLoggedIn: Boolean(userInContext && "email" in userInContext),
    email: userInContext && userInContext.email,
    logoutLink: `${context.publicHost}/user/logout`,
  };

  if (user && user.isLoggedIn) {
    const crystallizeCustomer = await crystallize.customers.get({
      identifier: user.email,
    });
    if (crystallizeCustomer) {
      Object.assign(user, crystallizeCustomer);
    }
  }

  return user;
}

module.exports = {
  COOKIE_USER_TOKEN_NAME,
  COOKIE_REFRESH_TOKEN_NAME,
  COOKIE_USER_TOKEN_MAX_AGE,
  COOKIE_REFRESH_TOKEN_MAX_AGE,
  authenticate(token) {
    invariant(JWT_SECRET, "process.env.JWT_SECRET is not defined");

    if (!token) {
      return null;
    }

    try {
      const jwt = require("jsonwebtoken");
      const decoded = jwt.verify(token, JWT_SECRET);
      if (!decoded) {
        return null;
      }

      return {
        email: decoded.email,
      };
    } catch (e) {
      return null;
    }
  },
  async sendMagicLink({ email, redirectURLAfterLogin, context }) {
    invariant(JWT_SECRET, "process.env.JWT_SECRET is not defined");

    const { publicHost } = context;

    const crystallizeCustomer = await crystallize.customers.get({
      identifier: email,
    });

    /**
     * If there is no customer record in Crystallize, we will
     * create one.
     *
     * You can choose NOT to create a customer at this point,
     * and prohibit logins for none customers
     */
    if (!crystallizeCustomer) {
      // return {
      //   success: false,
      //   error: "CUSTOMER_NOT_FOUND",
      // };
      const emailParts = email.split("@");
      await crystallize.customers.create({
        identifier: email,
        firstName: emailParts[0],
        lastName: emailParts[1],
      });
    }

    /**
     * This is the page responsible of receiving the magic
     * link token, and then calling the validateMagicLinkToken
     * function from userService.
     */
    const loginLink = new URL(`${publicHost}/user/login-magic-link`);

    /**
     * Add the JWT to the callback url
     * When the link is visited, we can validate the token
     * again in the validateMagicLinkToken method
     */
    const jwt = require("jsonwebtoken");
    loginLink.searchParams.append(
      "token",
      jwt.sign({ email, redirectURLAfterLogin }, JWT_SECRET, {
        expiresIn: "1h",
      })
    );

    const emailService = require("../email-service");

    const { success } = await emailService.sendUserMagicLink({
      loginLink: loginLink.toString(),
      email,
    });

    return { success };
  },
  validateMagicLinkToken(token) {
    invariant(JWT_SECRET, "process.env.JWT_SECRET is not defined");

    /**
     * Here we would want to fetch an entry matching the provided token from our
     * datastore. This boilerplate does not have a datastore connected to it yet
     * so we will just assume the token is for a real user and sign a login token
     * accordingly.
     */

    try {
      const jwt = require("jsonwebtoken");
      const decoded = jwt.verify(token, JWT_SECRET);
      const { email, redirectURLAfterLogin } = decoded;

      const signedLoginToken = jwt.sign({ email }, JWT_SECRET, {
        expiresIn: COOKIE_USER_TOKEN_MAX_AGE,
      });
      const signedLoginRefreshToken = jwt.sign({ email }, JWT_SECRET, {
        expiresIn: COOKIE_REFRESH_TOKEN_MAX_AGE,
      });

      return {
        success: true,
        signedLoginToken,
        COOKIE_USER_TOKEN_MAX_AGE,
        signedLoginRefreshToken,
        redirectURLAfterLogin,
        COOKIE_REFRESH_TOKEN_MAX_AGE,
      };
    } catch (error) {
      console.log(error);
      return {
        success: false,
        error,
      };
    }
  },
  validateRefreshToken({ refreshToken, email }) {
    if (!refreshToken || !email) {
      return false;
    }

    try {
      const jwt = require("jsonwebtoken");
      const decoded = jwt.verify(refreshToken, JWT_SECRET);
      if (decoded.email === email) {
        return jwt.sign({ email }, JWT_SECRET, {
          expiresIn: COOKIE_USER_TOKEN_MAX_AGE,
        });
      }
    } catch (e) {
      console.log(e);
    }

    return false;
  },
  getUser,
  async update({ context, input }) {
    const { user } = context;
    if (!user) {
      throw new Error("No user found in context");
    }
    await crystallize.customers.update({
      identifier: user.email,
      customer: input,
    });

    return getUser({ context });
  },
};
