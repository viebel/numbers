'use strict';

/* App Module */

angular.module('numbersApp', [
  'ngRoute',
  'numbersAnimations',
  'numbersControllers',
  'numbersFilters',
  'numbersServices'
]).
config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
      when('/numbers', {
        templateUrl: 'partials/numbers.html',
        controller: 'NumbersCtrl'
      }).
      otherwise({
        redirectTo: '/numbers'
      });
  }]);
