'use strict';

describe('Controller: EntryCtrl', function () {

  // load the controller's module
  beforeEach(module('boggWebApp'));

  var EntryCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    EntryCtrl = $controller('EntryCtrl', {
      $scope: scope
      // place here mocked dependencies
    });
  }));

});
