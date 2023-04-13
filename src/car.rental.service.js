const DiscoverVendors = require('./discover.vendors.js');
const PriceFinder = require('./price.finder.js');
const readline = require('readline');

function handleUserInput(days) {
  const getLowestPrice = PriceFinder.getLowestPrice;

  const discoverVendors = DiscoverVendors.discoverVendors;

  const vendors = discoverVendors();

  return {...getLowestPrice(parseInt(days), vendors)};
}

function displayResults(cheapestVendors) {
  console.log(`Best daily price: $${cheapestVendors.dailyPrice}\n`);

  console.log(`Total price: $${cheapestVendors.totalPrice}\n`);

  console.log(`Available from: ${cheapestVendors.vendorNames.join(', ')}\n`);
}

const userInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

userInterface.question('Please enter the number of days you would like to rent a car for: ', function(days) {
  try {
    const cheapestVendors = handleUserInput(days);

    displayResults(cheapestVendors);
  }
  
  finally {
    userInterface.close();
  }
});

