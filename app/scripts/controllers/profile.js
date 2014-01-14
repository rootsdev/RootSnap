'use strict';

angular.module('rootSnapApp')
  .constant('ProfileCtrlResolver', {
    person: function(familysearch, $route) {
      return familysearch.getPerson($route.current.params.id).then(function(response) {
        return response.getPerson();
      });
    },
    portraitURL: function(familysearch, $route) {
      return familysearch.getPersonPortraitURL($route.current.params.id, {followRedirect: true});
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

    $scope.photos = filterPhotos(photos);

    function filterPhotos(photos) {
      var result = [];
      for (var i = 0, len = photos.length; i < len; i++) {
        if (photos[i].mediaType.substring(0,6) === 'image/') {
          result.push(photos[i]);
        }
      }
      return result;
    }

    $scope.uploadFile = function(element) {
      console.log(element.files[0]);
      var fd = new FormData();
      fd.append('file', element.files[0]);
      // add memory
      familysearch.createMemory(fd).then(function(response) {
        // response == memory id
        var persona = new FamilySearch.Person();
        persona.addName(person.getNames()[0]);
        familysearch.createMemoryPersona(response, persona).then(function(response) {
          // response == MemoryRef
          familysearch.addPersonMemoryRef(person.id, response).then(function(response) {
            // re-fetch the photos
            familysearch.getPersonMemoriesQuery(person.id, {type: 'photo'}).then(function(response) {
              $scope.photos = filterPhotos(response.getMemories());
            });
          });
        });
      });
    };
  });
