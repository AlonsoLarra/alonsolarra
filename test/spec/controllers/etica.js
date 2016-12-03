'use strict';

describe('Controller: EticaCtrl', function () {

  // load the controller's module
  beforeEach(module('frontpocketApp'));

  var EticaCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EticaCtrl = $controller('EticaCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EticaCtrl.awesomeThings.length).toBe(3);
  });
});
