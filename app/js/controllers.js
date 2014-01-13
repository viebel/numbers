'use strict';

/* Controllers */

angular.module('numbersControllers', []).
controller('NumbersCtrl', ['$scope',
  function($scope) {
    $scope.range = 200;
    $scope.divisor = 2;
    $scope.condition = 'x % 4 == 0';
    function info(numbers, divisor, cond) {
        function conditional(cond, x){
            function myeval(expr) {
                var f = new Function('return ' + expr);
                return f();
            }
            return myeval(cond.replace(/x/g, x));
        }
        return _.map(numbers, function(x) {
            return {n: x, divisible: (x % divisor) == 0, condition: conditional(cond, x)};
        });
    };
    $scope.$watchCollection('[range, divisor]', function(){
        $scope.numbers = _.range(1, 1 + 1*$scope.range);
        $scope.numbersWithInfo = info($scope.numbers, $scope.divisor, $scope.condition);
    });
  }]);
