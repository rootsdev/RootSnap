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
  .controller('ProfileCtrl', function ($scope, person, portraitURL, photos, $rootScope) {
    $scope.person = person;

    $scope.$parent.signOutButton = true;
    $scope.$parent.goBackButton = true;
    $rootScope.footerNavBar = true;

    if (portraitURL) {
      $scope.portraitStyle = 'background: url('+portraitURL+') center center no-repeat; background-size:cover';
    }
    console.log('photos',photos);
    $scope.photos = [];
    for (var i = 0, len = photos.length; i < len; i++) {
      if (photos[i].mediaType.substring(0,6) === 'image/') {
        $scope.photos.push(photos[i]);
      }
    }
    $scope.loadPage = function() {
      //$location.path('/photo');
    };
  });
