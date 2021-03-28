'use strict';

/* global $ */

const { When } = require('@cucumber/cucumber');

When('I submit to login', () => {
  $('#login-button').click();
});