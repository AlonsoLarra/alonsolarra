'use strict';

describe('Controller: WeatherappCtrl', function () {

  // load the controller's module
  beforeEach(module('frontpocketApp'));

  var WeatherappCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    WeatherappCtrl = $controller('WeatherappCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(WeatherappCtrl.awesomeThings.length).toBe(3);
  });
});
