Feature: Cart Navigation

  Scenario: As a logged user, I can navigate to the shopping cart
    Given I am logged in
    When I click the shopping cart icon
    Then I am directed to my shopping cart page

  Scenario: As a logged user, I can see added items in my shopping cart page
    Given I am on the Shopping Cart page
    And I have added items to my cart
    When I look at the shopping cart list
    Then I can see my added items
