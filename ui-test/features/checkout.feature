Feature: Checkout

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
