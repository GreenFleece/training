'use strict';

var trainingServices = angular.module('trainingServices', ['ngResource']);

trainingServices.factory('Graph', ['$resource',
  function($resource) {
    return $resource('json/graph.json', {}, {
      get: {method:'GET', isArray:false},
      save: {method:'POST',
      	     //headers: {
      	     //	'Content-Type': 'text/plain',
      	     //	'Accept': 'text/plain'
      	     //}
      		}
    });
  }]);

//http://192.168.56.1:8000/src/main/json/graph.json
//json/graph.json