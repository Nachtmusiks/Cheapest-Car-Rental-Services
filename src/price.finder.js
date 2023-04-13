function getLowestPrice(numberOfDays, vendorsPriceFinder) {
  validateNumberOfDays(numberOfDays);

  const availablePriceDetails = vendorsPriceFinder.map(vendorPriceFinder => getPriceDetailsIgnoreException(vendorPriceFinder)).filter(Boolean);

  validateVendors(availablePriceDetails);
  
  const lowestVendorPrice = Math.min(...availablePriceDetails.map(vendor => vendor.price));  

  const lowestPricedVendors = availablePriceDetails.filter(vendor => vendor.price === lowestVendorPrice).map(vendor => vendor.vendorName);

  return { vendorNames: lowestPricedVendors, dailyPrice: lowestVendorPrice, totalPrice: lowestVendorPrice * numberOfDays }; 
}

function validateNumberOfDays(numberOfDays){
  if (numberOfDays <= 0) {
    throw new Error('Number of days must be positive');
  }
}

function validateVendors(vendors){
  if (vendors.length === 0) { 
    throw new Error('No vendors available');
  }
}

function getPriceDetailsIgnoreException(vendorPriceFinder) {
  try {
    return vendorPriceFinder();
  } catch (error) {
    return;
  }
}

module.exports.getLowestPrice = getLowestPrice;