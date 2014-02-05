'use strict';

angular.module('rootSnapApp')
  .constant('ProfileCtrlResolver', {
    person: function(familysearch, $route) {
      return familysearch.getPerson($route.current.params.id).then(function(response) {
        return response.getPerson();
      });
    },
    portraitURL: function(familysearch, $route) {
      return familysearch.getPersonPortraitUrl($route.current.params.id, {followRedirect: true});
    },
    photos: function(familysearch, $route) {
      return familysearch.getPersonMemoriesQuery($route.current.params.id, {type: 'photo'}).then(function(response) {
        return response.getMemories();
      });
    }
  })
  .controller('ProfileCtrl', function ($scope, familysearch, person, portraitURL, photos) {
    $scope.person = person;
    if (portraitURL) {
      $scope.portraitStyle = 'background: url('+portraitURL+') center center no-repeat; background-size:cover';
    }

    $scope.photos = photos;

    $scope.uploadFile = function(element) {
      familysearch.rsUploadFile(person, element.files[0]).then(function(memory) {
        $scope.photos.push(memory);
      });
    }
  });
