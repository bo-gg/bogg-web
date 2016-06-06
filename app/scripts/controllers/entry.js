'use strict';

/**
 * @ngdoc function
 * @name boggWebApp.controller:EntryCtrl
 * @description
 * # EntryCtrl
 * Controller of the boggWebApp
 */
angular.module('boggWebApp')
  .controller('EntryCtrl', function ($scope) {
    $scope.log = function () {
      console.log($scope.payload);
    };

  });
