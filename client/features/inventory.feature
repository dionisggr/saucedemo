Feature: Inventory/Cart Navigation

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

  Scenario: As a logged user, I can remove items from the cart
    Given I am on the Shopping Cart page
    When I remove an item from the cart
    Then the cart count shows 1