'use strict';

/* Services */

var numbersServices = angular.module('numbersServices', ['ngResource']);

numbersServices.factory('Phone', ['$resource',
  function($resource){
    return $resource('phones/:phoneId.json', {}, {
      query: {method:'GET', params:{phoneId:'phones'}, isArray:true}
    });
  }]);
