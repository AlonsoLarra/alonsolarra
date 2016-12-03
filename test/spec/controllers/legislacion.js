'use strict';

describe('Controller: LegislacionCtrl', function () {

  // load the controller's module
  beforeEach(module('frontpocketApp'));

  var LegislacionCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LegislacionCtrl = $controller('LegislacionCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LegislacionCtrl.awesomeThings.length).toBe(3);
  });
});
