'use strict';

/* Controllers */

angular.module('numbersControllers', []).
controller('NumbersCtrl', ['$scope',
  function($scope) {
    $scope.range = 200;
    $scope.divisor = 2;
    function info(numbers, divisor) {
        return _.map(numbers, function(x) {
            return {n: x, divisible: (x % divisor) == 0};
        });
    };
    $scope.$watchCollection('[range, divisor]', function(){
        $scope.numbers = _.range(1, 1 + 1*$scope.range);
        $scope.numbersWithInfo = info($scope.numbers, $scope.divisor);
    });
  }]);
