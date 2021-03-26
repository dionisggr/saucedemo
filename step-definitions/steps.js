const { Given, When, Then } = require('@cucumber/cucumber');

Given('I am on the login page', () => {
  browser.url('/');
});

When(/^I login with (.*) and (.*)$/, (username, password) => {
  $('#user-name').waitForDisplayed(5000);
  $('#user-name').click()
  $('#user-name').setValue(username)

  $('#password').waitForDisplayed(5000)
  $('#password').click()
  $('#password').setValue(password)
  
  $('#login-button').click();
});

Then('I should see the Products page', () => {
  $('#inventory_container').waitForDisplayed(5000);
});