Feature: addToCart

  Scenario: I can add to cart MacBook 16 with the most expensive setup
    Given I am on the main page
    When I go to the MacBook 16 page
    And I choose the most expensive setup
    And I add configured MacBook to the bag
    Then I go the the bag 
    And MacBook 16 with the most expensive setup is visible in the bag