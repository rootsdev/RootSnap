'use strict';

angular.module('rootSnapApp')
  .controller('MainCtrl', function ($scope, familysearch, $location) {
    $scope.$parent.signOutButton = false;
    $scope.$parent.goBackButton = false;
    

    $scope.login = function() {
      familysearch.getAccessToken().then(function() {
        $location.path('/list');
      });
    };
    $scope.logout = function() {
      //familysearch.logout = true;
      $location.path('/');
    };
  });
