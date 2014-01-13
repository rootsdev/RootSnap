/* global steroids */

'use strict';

angular.module('rootSnapApp')
  .controller('RootCtrl', function ($scope, $rootScope, $location, familysearch) {
    
    //if (!familysearch.hasAccessToken()) {
      // Force auth
      // $location.path('/');
    //}

    $rootScope.footerNavBar = false;
    $rootScope.signOutButton = false;
    $rootScope.goBackButton = false;
    $rootScope.isMobile = true;
    if (typeof steroids !== 'undefined') {
      $rootScope.isMobile = true;
      steroids.view.setAllowedRotations([0,180,-90,90]);  // Will rotate to every direction
    }

    $rootScope.loadPage = function(path, animation) {
      // if mobile, do steroids animation!
      $location.path(path);
    };
  });
