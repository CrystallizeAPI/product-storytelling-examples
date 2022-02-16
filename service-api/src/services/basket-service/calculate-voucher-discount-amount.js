function truncateDecimalsOfNumber(originalNumber, numberOfDecimals = 2) {
  // toFixed() converts a number into a string by truncating it
  // with the number of decimals passed as parameter.
  const amountTruncated = originalNumber.toFixed(numberOfDecimals);
  // We use parseFloat() to return a transform the string into a number
  return parseFloat(amountTruncated);
}

function calculateVoucherDiscountAmount({ voucher, amount }) {
  // We assume that the voucher has the right format.
  // It either has `discountPercent` or `discountAmount`
  const isDiscountAmount = Boolean(voucher.discountAmount);

  if (isDiscountAmount) {
    return voucher.discountAmount;
  }

  const amountToDiscount = (amount * voucher.discountPercent) / 100;

  return truncateDecimalsOfNumber(amountToDiscount);
}

module.exports = {
  calculateVoucherDiscountAmount,
};
