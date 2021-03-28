Feature: Login

  Scenario Outline: As a registered user, I can log in

    Given I am on the login page
    And I use credentials <username> and <password>
    When I submit to login
    Then I can see the Products page

    Examples:
      | username      | password     |
      | standard_user | secret_sauce |