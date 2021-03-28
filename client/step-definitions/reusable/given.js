'use strict';

/* global browser */

const { Given } = require('@cucumber/cucumber');
const { expect } = require('chai');
const Actions = require('../../support/actions');

Given('I am logged in', () => {
  Actions.login();
});

Given('I am on the {} page', (page) => {
  const paths = {
    'login': '/',
    'Products': '/inventory.html',
    'Shopping Cart': '/cart.html',
    'Checkout Overview': '/checkout-step-two.html'
  };

  browser.url(paths[page]);
});

Given('I see the {} page', (page) => {
  const paths = {
    'Products': '/inventory.html',
    'Checkout Overview': '/checkout-step-two.html'
  };
  
  expect(browser.getUrl()).to.have.string(paths[page]);
});