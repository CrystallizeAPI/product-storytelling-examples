function toCrystallizeOrderModel(basket, order) {
  const { payer, purchase_units } = order;
  const { shipping } = purchase_units[0];
  const { address } = shipping;
  const orderId = order.id;

  /**
   * Use email or payer id as the customer identifier in Crystallize.
   */
  const identifier = order.payer.email_address || order.payer.payer_id;

  return {
    cart: basket.cart,
    total: basket.total,
    payment: [
      {
        provider: "paypal",
        paypal: {
          orderId,
        },
      },
    ],
    meta: [
      {
        key: "PAYPAL_ORDER_STATUS",
        value: order.status,
      },
    ],
    customer: {
      identifier,
      firstName: payer?.name?.given_name || "",
      middleName: "",
      lastName: payer?.name?.surname || "",
      addresses: [
        {
          type: "delivery",
          firstName: payer?.name?.given_name || "",
          middleName: "",
          lastName: payer?.name?.surname || "",
          street: address?.address_line_1,
          street2: "",
          postalCode: address?.postal_code || "",
          city: address?.admin_area_2 || "",
          state: address?.admin_area_1 || "",
          country: address?.country_code || "",
          phone: "",
          email: payer?.email_address || "",
        },
      ],
    },
  };
}

module.exports = toCrystallizeOrderModel;
