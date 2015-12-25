'use strict';

/**
 * @ngdoc function
 * @name czdApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the czdApp
 */
angular.module('czdApp')
  .controller('MainCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
