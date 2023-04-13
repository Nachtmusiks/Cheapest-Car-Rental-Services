function getPrice() {
  return 30;
}

function getVendor() {
  return {
    vendorName: 'Avis',
    price: getPrice(),
  };
}

module.exports.getVendor = getVendor;