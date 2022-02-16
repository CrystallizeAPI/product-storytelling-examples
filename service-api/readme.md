# Service API on Vercel serverless functions

Serverless API for a [best of breed headless architecture](https://crystallize.com/blog/headless-architecture-with-best-of-breed-stacks).

The Service API comes with the following features:

- User authentication with magic link
- Basket with cart validation
- Voucher codes
- Checkout with Stripe, Mollie, Klarna or Vipps
- A lot of Crystallize webhooks examples

---

## Environment variables

For local deveopment you have these two files to help setting the secrets:

`.env`

Will be included in git. Typically includes the Crystallize tenant identifier and other things that are not considered sensitive information

`.env.local`

Sensitive information, excluded from git. Example of what goes here is Crystallize Access tokens, JWT token secret and payment provider client keys.

## Vercel serverless functions

Learn more about how to work with Vercel serverless functions here:
https://vercel.com/docs/serverless-functions/introduction
