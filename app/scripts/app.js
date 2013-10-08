// 'use strict';

angular.module('angularApp', []).config(function ($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'views/main.html',
    controller: 'MainCtrl'
  }).when('/todo', {
    templateUrl: 'views/todo.html',
    controller: 'TodoCtrl'
  }).when('/twitter', {
    templateUrl: 'views/twitter.html',
    controller: 'TwitterCtrl'
  }).otherwise({
    redirectTo: '/'
  });
});
