'use strict';

describe('Controller: RegistrationCtrl', function () {

  // load the controller's module
  beforeEach(module('boggWebApp'));

  var RegistrationCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    RegistrationCtrl = $controller('RegistrationCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(RegistrationCtrl.awesomeThings.length).toBe(3);
  });
});
