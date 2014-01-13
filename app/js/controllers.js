'use strict';

/* Controllers */

angular.module('numbersControllers', []).
controller('NumbersCtrl', ['$scope',
  function($scope) {
    $scope.$watch('range', function(newVal, oldVal){
        $scope.numbers = _.range(1, 1*newVal || 100);
    });
  }]);
