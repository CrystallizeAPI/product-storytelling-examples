const invariant = require("invariant");

const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;
const EMAIL_FROM = process.env.EMAIL_FROM;

module.exports = {
  sendEmail(args) {
    invariant(SENDGRID_API_KEY, "process.env.SENDGRID_API_KEY not defined");
    invariant(EMAIL_FROM, "process.env.EMAIL_FROM is not defined");

    const sgMail = require("@sendgrid/mail");
    sgMail.setApiKey(SENDGRID_API_KEY);

    return sgMail.send({
      from: EMAIL_FROM,
      ...args,
    });
  },
};
