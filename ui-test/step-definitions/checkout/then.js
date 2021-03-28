'use strict';

/* global $ */

const { Then } = require('@cucumber/cucumber');

Then('I can confirm the items I bought', () => {
  const itemOrCart = $('.cart_item') || $('.cart_list');

  itemOrCart.waitForDisplayed(5000);
});