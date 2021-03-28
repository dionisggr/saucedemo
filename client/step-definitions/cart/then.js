'use strict';

/* global $, browser */

const { Then } = require('@cucumber/cucumber');
const { expect, assert } = require('chai');

Then('I am directed to my shopping cart page', () => {
  expect(browser.getUrl()).to.have.string('/cart.html');
});

Then('I can see my added items', () => {
  assert.isNotNull($('.cart_item'));
});

Then('the cart count shows {}', (amount) => {
  expect($('.shopping_cart_badge').getText()).to.equal(amount);
});
