'use strict';

describe('Controller: LegamCtrl', function () {

  // load the controller's module
  beforeEach(module('frontpocketApp'));

  var LegamCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    LegamCtrl = $controller('LegamCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(LegamCtrl.awesomeThings.length).toBe(3);
  });
});
