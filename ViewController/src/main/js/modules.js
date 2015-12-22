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
        when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        }).
        when('/graph', {
            templateUrl: 'views/graph.html',
            controller: 'GraphCtrl'
        }).
        when('/page2', {
            templateUrl: 'views/page2.html',
            controller: 'Page2Ctrl'
        }).
        otherwise({
            redirectTo: '/dashboard'
        });

    $httpProvider.interceptors.push('httpRequestInterceptor');
  }]);
