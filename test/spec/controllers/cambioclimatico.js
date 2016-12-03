'use strict';

describe('Controller: CambioclimaticoCtrl', function () {

  // load the controller's module
  beforeEach(module('frontpocketApp'));

  var CambioclimaticoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    CambioclimaticoCtrl = $controller('CambioclimaticoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(CambioclimaticoCtrl.awesomeThings.length).toBe(3);
  });
});
