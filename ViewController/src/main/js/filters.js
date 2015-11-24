'use strict';

angular.module('trainingFilters', []).filter('something', function() {
  return function(input) {
    return input ? '\u2713' : '\u2718';
  };
});
