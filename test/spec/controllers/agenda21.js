'use strict';

describe('Controller: Agenda21Ctrl', function () {

  // load the controller's module
  beforeEach(module('frontpocketApp'));

  var Agenda21Ctrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    Agenda21Ctrl = $controller('Agenda21Ctrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(Agenda21Ctrl.awesomeThings.length).toBe(3);
  });
});
