'use strict';

/**
 * @ngdoc function
 * @name 2048App.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the 2048App
 */
angular.module('2048App')
  .controller('AboutCtrl', function ($scope) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
