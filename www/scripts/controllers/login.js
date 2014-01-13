/* global familysearch */

'use strict';

angular.module('rootSnapApp')
  .controller('LoginCtrl', function ($scope, familysearch, $location, $rootScope) {

    $rootScope.footerNavbar = false;
    $rootScope.signOutButton = false;
    $rootScope.goBackButton = false;

    $scope.login = function() {
      familysearch.getAccessToken().then(function() {
        $location.path('/list');
      });
    };

    $scope.logout = function() {
      //familysearch.logout = true;
      $location.path('/');
    };

    $scope.master = {};
   
    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.mobileLogin = function(user) {
      familysearch.getAccessTokenForMobile(user.name, user.password).then(function(response) {
        $location.path('/list');
      });

    };
   
    $scope.reset();

  });
