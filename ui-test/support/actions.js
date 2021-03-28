'use strict';

/* global $, browser */

const Actions = {
  inputText: (input, value) => {
    input.waitForDisplayed(5000);
    input.click();
    input.keys(value);
  }
  ,
  login: function () {
    browser.url('/');

    this.inputText($('#user-name'), 'standard_user');
    this.inputText($('#password'), 'secret_sauce');
    
    $('#login-button').click();
  }
};

module.exports = Actions;