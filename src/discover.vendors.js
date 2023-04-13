const importDir = require('directory-import');

function discoverVendors() {
  const vendors = importDir({ directoryPath: '../src/vendors' });

  const vendorFunctions = Object.values(vendors)
    .filter(value => typeof value === 'object' && typeof value.getVendor === 'function')
    .map(vendor => vendor.getVendor);

  return vendorFunctions;
}

module.exports.discoverVendors = discoverVendors;