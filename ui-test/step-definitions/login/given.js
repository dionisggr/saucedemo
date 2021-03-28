'use strict';

/* global $ */

const { Given } = require('@cucumber/cucumber');
const Actions = require('../../support/actions');

Given('I use credentials {} and {}', (username, password) => {
  Actions.inputText($('#user-name'), username);
  Actions.inputText($('#password'), password);
});