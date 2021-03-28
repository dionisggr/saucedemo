'use strict';

/* global $, browser */

const { Then } = require('@cucumber/cucumber');
const { expect } = require('chai');

Then('I can confirm I completed my purchase', () => {
  $('#checkout_complete_container').waitForDisplayed(5000);
});

Then(/^I can see the (\S+)/, (selected) => {
  const paths = {
    'Products': '/inventory.html',
    'Checkout': '/checkout-step-two.html'
  };

  const elements = {
    'list': $('.cart_list'),
    'total': $('.summary_total_label')
  };

  if (paths[selected]) {
    expect(browser.getUrl()).to.have.string(paths[selected]);
  } else {
    elements[selected].waitForDisplayed(5000);
  }
});