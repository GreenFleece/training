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
//      when('/other/:otherId', {
//        templateUrl: 'views/other-view.html',
//        controller: 'OtherCtrl'
//      }).
      otherwise({
        redirectTo: '/dashboard'
      });
  }]);
