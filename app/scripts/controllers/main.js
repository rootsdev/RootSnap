'use strict';

angular.module('rootSnapApp')
  .controller('MainCtrl', function ($scope, familysearch, $location) {
    $scope.login = function() {
      familysearch.getAccessToken().then(function() {
        $location.path('/list');
      });
    };
  });
