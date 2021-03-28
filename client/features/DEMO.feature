Feature: DEMO: Navigation & Purchase

  Scenario Outline: As a registered user, I can log in
    Given I am on the login page
    And I use credentials standard_user and secret_sauce
    When I submit to login
    Then I can see the Products page

  Scenario: As a logged user, I can sort items
    Given I am logged in
    And I am on the Products page
    When I select the sorting dropdown
    And I select to sort by lowest to highest price
    Then I should see items sorted in ascending price order

  Scenario: As a logged user, I can add items to the cart
    When I add an item to the cart
    And I add another item to the cart
    Then the cart count shows 2

  Scenario: As a logged user, I can navigate to the shopping cart
    When I click the shopping cart icon
    Then I am directed to my shopping cart page

  Scenario: As a logged user, I can see added items in my shopping cart page
    Given I am on the Shopping Cart page
    And I have added items to my cart
    When I look at the shopping cart list
    Then I can see my added items

  Scenario: As a logged user, I can remove items from the cart
    Given I am on the Shopping Cart page
    When I remove an item from the cart
    Then the cart count shows 1

  Scenario: As a logged user, I can another item to the cart
    Given I am on the Products page
    When I add an item to the cart
    Then the cart count shows 2

  Scenario: As a logged user, I can checkout when I am ready
    Given I am logged in
    And I am on the Shopping Cart page
    When I click the Checkout button
    And I submit my personal information
    Then I can see the Checkout Overview page

  Scenario: As a logged user, I can confirm my items at checkout
    Given I see the Checkout Overview page
    When I look at the Checkout summary
    Then I can see the list of items selected
    And I can see the total of my purchase

  Scenario: As a logged user, I can complete my purchase
    Given I see the Checkout Overview page
    When I click the Finish button
    Then I can confirm I completed my purchase