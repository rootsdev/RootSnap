'use strict';

angular.module('rootSnapApp')
  .constant('ListCtrlResolver', {
    ancestry: function(familysearch) {
      return familysearch.getCurrentUserPersonId().then(function(id) {
        console.log('id=',id);
        return familysearch.getAncestry(id, {personDetails: true}).then(function(response) {
          console.log('persons=',response.getPersons());
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
