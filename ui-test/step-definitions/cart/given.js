'use strict';

/* global $ */

const { Given } = require('@cucumber/cucumber');
const { expect } = require('chai');

Given('I have added items to my cart', () => {
  expect($('.shopping_cart_badge')).to.exist;
});