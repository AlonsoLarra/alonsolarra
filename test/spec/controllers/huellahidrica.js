'use strict';

describe('Controller: HuellahidricaCtrl', function () {

  // load the controller's module
  beforeEach(module('frontpocketApp'));

  var HuellahidricaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    HuellahidricaCtrl = $controller('HuellahidricaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(HuellahidricaCtrl.awesomeThings.length).toBe(3);
  });
});
