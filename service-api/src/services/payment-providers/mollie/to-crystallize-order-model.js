/**
 * TODO: review what happens to the General Order Vat Group on multiple tax groups
 * on order (mult. items having diff vatTypes, is it a thing?)
 */

module.exports = function mollieToCrystallizeOrderModel({
  mollieOrder,
  mollieCustomer,
}) {
  const customerName = mollieCustomer.name.split(" ");

  return {
    customer: {
      identifier: mollieCustomer.email,
      firstName: customerName[0],
      middleName: customerName.slice(1, customerName.length - 1).join(),
      lastName: customerName[customerName.length - 1],
      birthDate: Date,
      addresses: [
        {
          type: "billing",
          firstName: customerName[0],
          middleName: customerName.slice(1, customerName.length - 1).join(),
          lastName: customerName[customerName.length - 1],
          street: "Test line1",
          street2: "Test line2",
          postalCode: "Test postal_code",
          city: "Test city",
          state: "Test state",
          country: "Test country",
          phone: "Test Phone",
          email: mollieCustomer.email,
        },
        {
          type: "delivery",
          firstName: customerName[0],
          middleName: customerName.slice(1, customerName.length - 1).join(),
          lastName: customerName[customerName.length - 1],
          street: "Test line1",
          street2: "Test line2",
          postalCode: "Test postal_code",
          city: "Test city",
          state: "Test state",
          country: "Test country",
          phone: "Test Phone",
          email: mollieCustomer.email,
        },
      ],
    },
    payment: [
      {
        provider: "custom",
        custom: {
          properties: [
            {
              property: "resource",
              value: mollieOrder.resource,
            },
            {
              property: "resource_id",
              value: mollieOrder.id,
            },
            {
              property: "mode",
              value: mollieOrder.mode,
            },
            {
              property: "method",
              value: mollieOrder.method,
            },
            {
              property: "status",
              value: mollieOrder.status,
            },
            {
              property: "profileId",
              value: mollieOrder.profileId,
            },
            {
              property: "mandateId",
              value: mollieOrder.mandateId,
            },
            {
              property: "customerId",
              value: mollieOrder.customerId,
            },
            {
              property: "sequenceType",
              value: mollieOrder.sequenceType,
            },
          ],
        },
      },
    ],
  };
};
