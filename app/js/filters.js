'use strict';

/* Filters */

angular.module('numbersFilters', []).
filter('checkmark', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
}).
filter('divisible', function(){
    return function(items, divisor) {
        return _.map(items, function(x) { return {n: input, divisible: x % divisor == 0}});
    }
});
