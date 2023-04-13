import { discoverVendors } from '../src/discover.vendors.js';
import {copyFileSync, unlinkSync} from 'fs';

test('discoverVendors finds all vendors in the vendors directory', () => {
  const vendors = discoverVendors();

  expect(vendors.length).toBeGreaterThanOrEqual(3);

  vendors.forEach(vendor => {
    expect(typeof vendor).toBe('function');
  });
});

test('add a vendor, get all vendors returns the newly added vendor. Then remove the vendor that was added and verify that get all vendors does not return the removed vendor', () => {
  const vendorFilePath = './src/vendors/avis.js';

  const tempVendorFilePath = './src/vendors/tempVendor.js';

  const originalVendorsLength = discoverVendors().length;

  copyFileSync(vendorFilePath, tempVendorFilePath); 

  expect(discoverVendors().length).toBe(originalVendorsLength + 1);

  unlinkSync(tempVendorFilePath);

  expect(discoverVendors().length).toBe(originalVendorsLength);
});
