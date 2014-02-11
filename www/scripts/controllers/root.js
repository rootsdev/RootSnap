/* global steroids */
/*jshint unused: false */

'use strict';

angular.module('rootSnapApp')
  .controller('RootCtrl', function ($scope, $rootScope, $location, familysearch) {
    
    //if (!familysearch.hasAccessToken()) {
      // Force auth
      // $location.path('/');
    //}
    //

    $rootScope.signOutButton = false;
    $rootScope.goBackButton = false;
    $rootScope.isMobile = false;
    $rootScope.footerNavBar = false;

    //if (location.href.indexOf(':9000') === -1) {
      $rootScope.isMobile = true;
      if (typeof steroids !== 'undefined') {
        //steroids.view.setAllowedRotations([0,180,-90,90]);  // Will rotate to every direction  
      }
    //}

    $rootScope.loadPage = function(path, params) {
      if (typeof params === 'undefined') {
        params = {};
      }
      //nconsole.log('Switching pages, path: '+path, params);
      // if mobile, do steroids animation!
      $location.path(path).search(params);
    };
  });
