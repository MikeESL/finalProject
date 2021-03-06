'use strict';

angular.module('finalProjectApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'firebase',
  'angularfire.firebase',
  'angularfire.login',
  'simpleLoginTools',
  'ui.bootstrap'
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
        controller: 'GhostCtrl',
      })
      .when('/list', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/list.html',
        controller: 'GhostCtrl',
      })
      .when('/search', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/search.html',
        controller: 'GhostCtrl',
      })
      .when('/about', {
        authRequired: false, // if true, must log in before viewing this page
        templateUrl: 'views/about.html',
        //controller: 'GhostCtrl',
      })
      .otherwise({
        redirectTo: '/'
      });
  });
