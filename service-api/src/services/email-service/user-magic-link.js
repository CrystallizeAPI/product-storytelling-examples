const { sendEmail } = require("./utils");

module.exports = async function sendMagicLinkLogin({ loginLink, email }) {
  try {
    const mjml2html = require("mjml");
    const { html } = mjml2html(`
      <mjml>
        <mj-body>
          <mj-section>
            <mj-column>
              <mj-text>Hi there! Simply follow the link below to login.</mj-text>
              <mj-button href="${loginLink}" align="left">Click here to login</mj-button>
            </mj-column>
          </mj-section>
        </mj-body>
      </mjml>
    `);

    await sendEmail({
      to: email,
      subject: "Magic link login",
      html,
    });

    return {
      success: true,
    };
  } catch (error) {
    console.log(error);
    return {
      success: false,
      error,
    };
  }
};
