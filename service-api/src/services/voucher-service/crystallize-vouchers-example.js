const { callCatalogueApi } = require("../crystallize/utils");

/**
 * Example of how to use Crystallize to store and
 * manage vouchers.
 *
 * Expected catalogue structure:
 * _vouchers
 *  - voucher_1
 *  - voucher_2
 *  - ...
 *  - voucher_n
 *
 * Each voucher is based on the following shape
 * code (singleLine)
 * discount (choiceComponent)
 *  - percent (numeric)
 *  - amount (numeric)
 */
module.exports = async function getCrystallizeVouchers() {
  const vouchersFromCrystallize = await callCatalogueApi({
    query: `
      {
        catalogue(language: "en", path: "/vouchers") {
          children {
            name
            code: component(id: "code") {
              content {
                ... on SingleLineContent {
                  text
                }
              }
            }
            discount: component(id: "discount") {
              content {
                ... on ComponentChoiceContent {
                  selectedComponent {
                    id
                    content {
                      ... on NumericContent {
                        number
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    `,
  });

  if (
    !vouchersFromCrystallize.data ||
    !vouchersFromCrystallize.data.catalogue
  ) {
    return [];
  }

  return vouchersFromCrystallize.data.catalogue.children.map(
    (voucherFromCrystallize) => {
      const discountComponent =
        voucherFromCrystallize.discount.content.selectedComponent;

      let discountAmount = null;
      let discountPercent = null;
      if (discountComponent.id === "percent") {
        discountPercent = discountComponent.content.number;
      } else {
        discountAmount = discountComponent.content.number;
      }

      return {
        code: voucherFromCrystallize.code.content.text,
        discountAmount,
        discountPercent,
        onlyForAuthorisedUser: false,
      };
    }
  );
};
