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

    function filterPhotos(photos) {
      var result = [];
      for (var i = 0, len = photos.length; i < len; i++) {
        console.log('photo', photos[i]);
        if (photos[i].mediaType.substring(0,6) === 'image/') {
          result.push(photos[i]);
        }
      }
      return result;
    }

    $scope.photos = filterPhotos(photos);

    $scope.uploadFile = function(element) {
      console.log(element.files[0]);
      var fd = new FormData();
      fd.append('artifact', element.files[0]);
      // add memory
      familysearch.createMemory(fd).then(function(response) {
        // response == memory id
        familysearch.getMemory(response).then(function(response) {
          var memory = response.getMemory();
          var persona = new familysearch.MemoryPersona(person.$getDisplayName(), memory.about);
          familysearch.createMemoryPersona(memory.id, persona).then(function(response) {
            // response == MemoryRef
            familysearch.addPersonMemoryRef(person.id, response).then(function() {
              // re-fetch the photos
              familysearch.getPersonMemoriesQuery(person.id, {type: 'photo'}).then(function(response) {
                $scope.photos = filterPhotos(response.getMemories());
              });
            });
          });
        });
      });
    };
  });
