'use strict';

angular.module('rootSnapApp', [
  'ngCookies',
  'ngResource',
  'ngSanitize',
  'ngRoute',
  'wu.masonry'
])
  .config(function ($routeProvider, $locationProvider, ListCtrlResolver, ProfileCtrlResolver) {
    $locationProvider.html5Mode(false).hashPrefix('!');
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl'
      })
      .when('/list', {
        templateUrl: 'views/list.html',
        controller: 'ListCtrl',
        resolve: ListCtrlResolver
      })
      .when('/profile', {
        templateUrl: 'views/profile.html',
        controller: 'ProfileCtrl',
        resolve: ProfileCtrlResolver
      })
      .otherwise({
        redirectTo: '/'
      });
  });
