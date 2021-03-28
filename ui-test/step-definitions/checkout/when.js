'use strict';

/* global $ */

const { When } = require('@cucumber/cucumber');
const Actions = require('../../support/actions');

When('I submit my personal information', () => {
  Actions.inputText($('#first-name'), 'First Name');
  Actions.inputText($('#last-name'), 'Last Name');
  Actions.inputText($('#postal-code'), '90210');

  $('.cart_button').click();
});

When('I look at the Checkout summary', () => {
  $('#checkout_summary_container').waitForDisplayed(5000);
});