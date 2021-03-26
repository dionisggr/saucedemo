Feature: The Sauce Demo Website

  Scenario Outline: As a registered user, I can log in

    Given I am on the login page
    When I login with <username> and <password>
    Then I should see the Products page

    Examples:
      | username                 | password       |
      | standard_user            | secret_sauce   |

      



