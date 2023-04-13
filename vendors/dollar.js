function getPrice() {
  if (Math.random() > 0.5) {
    throw new Error('Vendor is not available');
  }
  
  return 30;
}

function getVendor() {
  return {
    vendorName: 'Dollar',
    price: getPrice(),
  };
}

module.exports.getVendor = getVendor;