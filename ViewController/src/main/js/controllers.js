'use strict'

var trainingControllers = angular.module('trainingControllers', [])


trainingControllers.controller('NavBarCtrl', ['$scope', '$http',
    function($scope, $http) {
        $http.get('json/navigation.json')
            .then(function(response) {
                $scope.navigation = response.data.navigation
            }, function(response) {
                console.error('navigation response error', response)
            })
    }])

trainingControllers.controller('DashboardCtrl', ['$scope', '$routeParams', 'Dashboard',
    function($scope, $routeParams, Dashboard) {
//    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//      $scope.mainImageUrl = phone.images[0]
//    })
//
//    $scope.setImage = function(imageUrl) {
//      $scope.mainImageUrl = imageUrl
//    }
    }])

trainingControllers.controller('Page1Ctrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
//    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//      $scope.mainImageUrl = phone.images[0]
//    })
//
//    $scope.setImage = function(imageUrl) {
//      $scope.mainImageUrl = imageUrl
//    }
    }])

trainingControllers.controller('Page2Ctrl', ['$scope', '$routeParams',
    function($scope, $routeParams) {
//    $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
//      $scope.mainImageUrl = phone.images[0]
//    })
//
//    $scope.setImage = function(imageUrl) {
//      $scope.mainImageUrl = imageUrl
//    }
    }])