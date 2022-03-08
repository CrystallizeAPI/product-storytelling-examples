const getCrystallizeVouchers = require("./crystallize-vouchers-example");

/**
 * Example of a voucher register
 * You can customise this to call an external service
 * or keep static vouchers like this
 */
const voucherRegister = [
  {
    code: "ok-deal",
    discountAmount: 2,
    discountPercent: null,
    onlyForAuthorisedUser: false,
  },
  {
    code: "fair-deal",
    discountAmount: null,
    discountPercent: 5,
    onlyForAuthorisedUser: false,
  },
  {
    code: "awesome-deal-logged-in",
    discountAmount: null,
    discountPercent: 10,
    onlyForAuthorisedUser: true,
  },
  {
    code: "good-deal-logged-in",
    discountAmount: 100,
    discountPercent: null,
    onlyForAuthorisedUser: true,
  },
];

module.exports = {
  async get({ code, context }) {
    const { user } = context;

    const isAnonymousUser = !user || !user.isLoggedIn;

    const allCrystallizeVouchers = await getCrystallizeVouchers();

    const allVouchers = [...voucherRegister, ...allCrystallizeVouchers];

    // As default, not all the vouchers work for anonymous users.
    // As you'll see in the configuration above, some need the user to be logged in
    if (isAnonymousUser) {
      const voucher = allVouchers
        .filter((v) => !v.onlyForAuthorisedUser)
        .find((v) => v.code === code);

      return {
        isValid: Boolean(voucher),
        voucher,
      };
    }

    // Search all vouchers for authenticated users
    let voucher = allVouchers.find((v) => v.code === code);

    return {
      isValid: Boolean(voucher),
      voucher,
    };
  },
};
