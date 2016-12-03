'use strict';

describe('Controller: AccionesconcretasCtrl', function () {

  // load the controller's module
  beforeEach(module('frontpocketApp'));

  var AccionesconcretasCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    AccionesconcretasCtrl = $controller('AccionesconcretasCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(AccionesconcretasCtrl.awesomeThings.length).toBe(3);
  });
});
