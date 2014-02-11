/* global familysearch, alert */
/*jshint unused: false */

'use strict';

angular.module('rootSnapApp')
  .controller('LoginCtrl', function ($scope, familysearch, $location, $rootScope) {

    if (familysearch.hasAccessToken() && (location.hash === '#!/' ||  location.hash === '') ) {
      $location.path('/list');
    }

    $rootScope.footerNavbar = false;
    $rootScope.signOutButton = false;
    $rootScope.goBackButton = false;

    $scope.login = function() {
      familysearch.getAccessToken().then(function() {
        $location.path('/list');
      });
    };

    $scope.logout = function() {
      familysearch.invalidateAccessToken();
      $location.path('/');
    };

    $scope.master = {};
   
    $scope.reset = function() {
      $scope.user = angular.copy($scope.master);
    };

    $scope.mobileLogin = function(user) {
      familysearch.getAccessTokenForMobile(user.name, user.password).then(function() {
        $location.path('/list');
      }).catch(function(response) {

        if (typeof steroids !== 'undefined') {
          navigator.notification.alert(
              /*jshint camelcase: false */
              /* global alertDismissed */
              response.data.error_description, // message
              alertDismissed,         // callback
              'Login Failed',            // title
              'Ok'                  // buttonName
          );
        } else {
          alert('There was an error: '+response.data.error_description);
        }
        
      });

    };
   
    $scope.reset();

  });
