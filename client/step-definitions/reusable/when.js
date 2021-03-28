'use strict';

/* global $ */

const { When } = require('@cucumber/cucumber');

When(/^I (.*) (?:.*) item (?:.*) the cart$/, (type) => {
  const button = {
    'add': $('.btn_primary'),
    'remove': $('.btn_secondary'),
  };

  button[type].click();
});

When('I click the {} button', (type) => {
  const button = {
    'Finish': $('.cart_button'),
    'Checkout': $('.checkout_button')
  };

  button[type].click();
});