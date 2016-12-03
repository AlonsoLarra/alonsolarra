'use strict';

describe('Controller: EfectoinvernaderoCtrl', function () {

  // load the controller's module
  beforeEach(module('frontpocketApp'));

  var EfectoinvernaderoCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EfectoinvernaderoCtrl = $controller('EfectoinvernaderoCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(EfectoinvernaderoCtrl.awesomeThings.length).toBe(3);
  });
});
