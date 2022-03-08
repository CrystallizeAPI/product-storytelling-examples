const SellingPartnerAPI = require("amazon-sp-api");

// To get a new refresh token, go to the Seller Central / Develop Apps / App -> Authorise and get a new pair
// Client ID and Secret are provided when creating the App
// Access ID and Secrete are downloaded when creating the IAM User in AWS
// Role is the role created in IAM Roles in AWS
// The region to use for the SP-API endpoints ("eu", "na" or "fe")
// If you want to use Sandbox Env. you can add options: { use_sandbox: true } under region
const sellingPartner = new SellingPartnerAPI({
    region: "na",
    options: {
      use_sandbox: true,
    },
    credentials: {
      SELLING_PARTNER_APP_CLIENT_ID: "YOUR_APP_CLIENT_ID",
      SELLING_PARTNER_APP_CLIENT_SECRET: "YOUR_APP_CLIENT_SECRET",
      AWS_ACCESS_KEY_ID: "YOUR_ACCESS_KEY",
      AWS_SECRET_ACCESS_KEY: "YOUR_KEY_SECRET",
      AWS_SELLING_PARTNER_ROLE: "YOUR_SELLING_PARTNER_ROLE_ARN",
    },
    refresh_token: "YOUR_APP_REFRESH_TOKEN",
  });

module.exports = async function orderCreated(payload) {
  console.log("Webhook payload: orderCreatedFBAFulfillment");
  console.log(JSON.stringify(payload, null, 2));

  /**
   * Here we post on AWS using Sandbox API and sandbox variables. Feel free to add
   * your own order information if you like. Make sure you remove OPTIONS and USE_SANDBOX when testing with your data
   */
   try {
    const res = await sellingPartner.callAPI({
        operation: "createFulfillmentOrder",
        endpoint: "fulfillmentOutbound",
        method: "POST",
        body: {
          marketplaceId: "ATVPDKIKX0DER",
          sellerFulfillmentOrderId: "FBATestOrder-11",
          displayableOrderId: "TestOrder-FBAOutbound",
          displayableOrderDate: "2020-01-09T19:46:45.809Z",
          displayableOrderComment: "TestOrder",
          shippingSpeedCategory: "Standard",
          destinationAddress: {
            name: "Amazon",
            addressLine1: "1234 Amazon Way",
            addressLine2: "Suite 123",
            addressLine3: "Lane1",
            stateOrRegion: "MI",
            countryCode: "US",
            city: "Troy",
            postalCode: "48084",
          },
          fulfillmentAction: "Ship",
          codSettings: {
            isCodRequired: false,
            codCharge: {
              currencyCode: "USD",
              value: "10.00",
            },
            codChargeTax: {
              currencyCode: "USD",
              value: "2.00",
            },
            shippingCharge: {
              currencyCode: "USD",
              value: "5.00",
            },
            shippingChargeTax: {
              currencyCode: "USD",
              value: "3.00",
            },
          },
          notificationEmails: ["test1%40amazon.com", "test2%40amazon.com"],
          items: [
            {
              sellerSku: "CR-47K6-H6QN",
              sellerFulfillmentOrderItemId: "OrderItemID1",
              quantity: 3,
            },
            {
              sellerSku: "PSMM-TEST-SKU-Jan-21_19_59_44-0738",
              sellerFulfillmentOrderItemId: "OrderItemID2",
              quantity: 1,
            },
          ],
        },
      });
    if (res.error) {
    console.log("There's an error!", res.error);
    } else {
    console.log("No errors", res);
    return {
        items:[
            {
              sellerSku: "CR-47K6-H6QN",
              sellerFulfillmentOrderItemId: "OrderItemID1",
              quantity: 3,
            },
            {
              sellerSku: "PSMM-TEST-SKU-Jan-21_19_59_44-0738",
              sellerFulfillmentOrderItemId: "OrderItemID2",
              quantity: 1,
            },
          ]
    };
    }
  } catch (e) {
    console.log(e);
  }
};
