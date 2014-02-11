'use strict';
/*jshint bitwise: false*/
angular.module('rootSnapApp')
  .constant('ListCtrlResolver', {
    ancestry: function(familysearch) {
      return familysearch.getCurrentUserPersonId().then(function(id) {
        return familysearch.getAncestry(id, {personDetails: true}).then(function(response) {
          return response.getPersons();
        });
      });
    }
  })
  .controller('ListCtrl', function ($scope, $location, ancestry, $rootScope) {

    $rootScope.signOutButton = true;
    $rootScope.goBackButton = false;
    $rootScope.footerNavbar = false;

    $scope.ancestry = ancestry;

    $scope.getAncestryHtml = function(person) {
      var n = person.getAscendancyNumber();
      var result = '';
      while (n > 1) {
        result = ( ( n & 1 ) ? '<span class="female"></span>' : '<span class="male"></span>' ) + result;
        n = n>>1;
      }
      if (result !== '') {
        result = '<div class="dots">'+result+'</div>';
      }
      return result;
    };

    $scope.select = function(person) {
      $rootScope.loadPage('/profile', {id: person.id});
    };
  });
