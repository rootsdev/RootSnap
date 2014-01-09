'use strict';

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
  .controller('ListCtrl', function ($scope, $location, ancestry) {
    $scope.ancestry = ancestry;

    $scope.select = function(person) {
      $location.path('/profile').search({id: person.id});
    };
  });
