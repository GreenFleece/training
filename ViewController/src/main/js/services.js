'use strict';

var trainingServices = angular.module('trainingServices', ['ngResource']);

trainingServices.factory('Dashboard', ['$resource',
  function($resource){
    return $resource('temp/:something.json', {}, {
      query: {method:'GET', params:{otherId:'other'}, isArray:true}
    });
  }]);
