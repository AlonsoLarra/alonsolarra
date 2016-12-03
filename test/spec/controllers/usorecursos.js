'use strict';

describe('Controller: UsorecursosCtrl', function () {

  // load the controller's module
  beforeEach(module('frontpocketApp'));

  var UsorecursosCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    UsorecursosCtrl = $controller('UsorecursosCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(UsorecursosCtrl.awesomeThings.length).toBe(3);
  });
});
