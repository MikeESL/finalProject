'use strict';

angular.module('finalProjectApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'angularfire.firebase',
  'angularfire.login',
  'simpleLoginTools'
])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/login', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/login.html',
        controller: 'LoginController'
      })
      .when('/create', {
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/create.html',
        //controller: 'PostController'
      }).when('/list', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/test.html',
        controller: 'PostController'
      }).when('/test', {
        authRequired: true, // if true, must log in before viewing this page
        templateUrl: 'views/test.html',
        controller: 'LoginController'
      })
      .otherwise({
        redirectTo: '/'
      });
  });
