Feature: Navigation bar 

  Scenario: I can navigate to MacBook Pro 16 page
    Given I am on the main page
    When I click Mac button
    And I click 'MacBook Pro 16' button
    Then I am redirected to the 'MacBook Pro 16' page
    And I can see 'MacBook Pro 16' text displayed

  Scenario: I can navigate to MacBook Air page
    Given I am on the main page
    When I click Mac button
    And I click 'MacBook Air' button
    Then I am redirected to the 'MacBook Air' page
    And I can see 'MacBook Air' text displayed

  Scenario: I can navigate to MacBook Pro 13 page
    Given I am on the main page
    When I click Mac button
    And I click 'MacBook Pro 13' button
    Then I am redirected to the 'MacBook Pro 13' page
    And I can see 'MacBook Pro 13' text displayed
  
  Scenario: I can navigate to iMac page
    Given I am on the main page
    When I click Mac button
    And I click 'iMac' button
    Then I am redirected to the 'iMac' page
    And I can see 'iMac' text displayed

  Scenario: I can navigate to iMac Pro page
    Given I am on the main page
    When I click Mac button
    And I click 'iMac Pro' button
    Then I am redirected to the 'iMac Pro' page
    And I can see 'iMac Pro' text displayed

  Scenario: I can navigate to Mac Pro page
    Given I am on the main page
    When I click Mac button
    And I click 'Mac Pro' button
    Then I am redirected to the 'Mac Pro' page
    And I can see 'Mac&nbspPro' text displayed

  Scenario: I can navigate to Mac mini page
    Given I am on the main page
    When I click Mac button
    And I click 'Mac mini' button
    Then I am redirected to the 'Mac mini' page
    And I can see 'Mac mini' text displayed

  