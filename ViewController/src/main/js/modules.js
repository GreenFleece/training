'use strict';

var trainingModule = angular.module('trainingModule', [
  'ngRoute',

  'trainingControllers',
  'trainingFilters',
  'trainingServices'
]);

trainingModule.config(['$routeProvider',
  function($routeProvider) {
    $routeProvider.
        when('/dashboard', {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
        }).
        when('/page1', {
            templateUrl: 'views/page1.html',
            controller: 'Page1Ctrl'
        }).
        when('/page2', {
            templateUrl: 'views/page2.html',
            controller: 'Page2Ctrl'
        }).
        otherwise({
            redirectTo: '/dashboard'
        });
  }]);
