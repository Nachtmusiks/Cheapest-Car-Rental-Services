function getPrice() {
  return Math.floor(Math.random() * 100) + 1;
}

function getVendor() {
  return {
    vendorName: 'Budget',
    price: getPrice(),
  };
}

module.exports.getVendor = getVendor;