Feature: Navigation bar 

  Scenario: I can navigate to MacBook 16 page
    Given I am on the main page
    When I click Mac button
    And I click 'MacBook 16' button
    Then I am redirected to the 'MacBook 16' page
    And I can see 'MacBook 16' text displayed