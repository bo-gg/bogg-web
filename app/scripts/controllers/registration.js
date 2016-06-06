'use strict';

/**
 * @ngdoc function
 * @name boggWebApp.controller:RegistrationCtrl
 * @description
 * # RegistrationCtrl
 * Controller of the boggWebApp
 */
angular.module('boggWebApp')
  .controller('RegistrationCtrl', function ($scope) {
    $scope.weekGoal = '';
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    $scope.payload = {
      username: '',
      email: '',
      password: '',
      daily_weight_goal: '',
      height: '',
      weight: '',
      activity_factor: '1.2',
      bogger: {
        gender: 'M',
        birthdate: '',
        auto_update_goal: true
      }
    };
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers


    $scope.register = function () {
      console.log($scope.payload);
    };
    
    // jscs:disable requireCamelCaseOrUpperCaseIdentifiers
    $scope.calcGoal = function () {
      $scope.payload.daily_weight_goal = $scope.weekGoal / 7;
    };
    // jscs:enable requireCamelCaseOrUpperCaseIdentifiers

  });
