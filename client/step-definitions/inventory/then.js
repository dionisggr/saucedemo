'use strict';

/* global $$ */

const { Then } = require('@cucumber/cucumber');
const chai = require('chai');
const { expect } = chai;
chai.use(require('chai-sorted'));

Then('I should see items sorted in {} price order', (order) => {
  const prices = [...$$('.inventory_item_price')].map(node => Number(node.getText().slice(1)));
  let descending = (order !== 'ascending') ? true : false;

  expect(prices).to.be.sorted({ descending });
});