'use strict';

describe('Controller: EsteropuntabandaCtrl', function () {

  // load the controller's module
  beforeEach(module('frontpocketApp'));

  var EsteropuntabandaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EsteropuntabandaCtrl = $controller('EsteropuntabandaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EsteropuntabandaCtrl.awesomeThings.length).toBe(3);
  });
});
