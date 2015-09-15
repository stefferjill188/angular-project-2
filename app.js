'use strict';

// Declare app level module which depends on views, and components
angular.module('templateStore', [
  'ngRoute',
  'templateStore.templates'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/templates'});
}]);
