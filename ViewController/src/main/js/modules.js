'use strict';

var trainingModule = angular.module('trainingModule', [
  'ngRoute',
  'trainingControllers',
  'trainingFilters',
  'trainingServices'
]);

trainingModule.factory('httpRequestInterceptor', [
  function() {
    return {
      request: function (config) {
        // config.headers['Access-Control-Allow-Origin'] = '*';
        // config.headers['Access-Control-Allow-Methods'] = 'GET,POST,PUT,DELETE,OPTIONS';
        // config.headers['Access-Control-Allow-Headers'] = 'X-Requested-With, X-HTTP-Method-Override, Content-Type, Accept';
        
        return config;
      }
    }
  }]);

trainingModule.config(['$routeProvider', '$httpProvider',
  function($routeProvider, $httpProvider) {
    $routeProvider.
        when('/home', {
            templateUrl: 'views/home.html',
            controller: 'HomeCtrl'
        }).
        when('/graph', {
            templateUrl: 'views/graph.html',
            controller: 'GraphCtrl'
        }).
        when('/test-page', {
            templateUrl: 'views/test-page.html',
            controller: 'TestPageCtrl'
        }).
        otherwise({
            redirectTo: '/home'
        });

    $httpProvider.interceptors.push('httpRequestInterceptor');
  }]);
