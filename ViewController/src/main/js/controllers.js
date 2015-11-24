'use strict';

var trainingControllers = angular.module('trainingControllers', []);

trainingControllers.controller('DashboardCtrl', ['$scope', 'Dashboard',
  function($scope, Dashboard) {
    //$scope.phones = Dashboard.query();
    //$scope.orderProp = 'age';
  }]);

trainingControllers.controller('OtherCtrl', ['$scope', '$routeParams', 'Other',
  function($scope, $routeParams, Other) {
//    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//      $scope.mainImageUrl = phone.images[0];
//    });
//
//    $scope.setImage = function(imageUrl) {
//      $scope.mainImageUrl = imageUrl;
//    };
  }]);
