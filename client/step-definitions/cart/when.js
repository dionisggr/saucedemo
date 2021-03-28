'use strict';

/* global $ */

const { When } = require('@cucumber/cucumber');

When('I click the shopping cart icon', () => {
  $('.fa-shopping-cart').click();
});

When('I look at the shopping cart list', () => {
  $('.cart_list').waitForDisplayed(5000);
});

When('I select the sorting dropdown', () => {
  $('.product_sort_container').click();
});

When('I select to sort by {} to {} price', (first, last) => {
  const sort = first.slice(0, 2) + last.slice(0, 2);
  
  $(`option[value=${sort}]`).click();
});