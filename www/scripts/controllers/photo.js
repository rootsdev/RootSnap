'use strict';

angular.module('rootSnapApp')
//.controller('PhotoCtrl', function ($scope, familysearch, $location) {
.controller('PhotoCtrl', function ($scope, $rootScope) {
  $scope.footerNavBar = false;
  $rootScope.footerNavBar = false;
  $scope.uploadPhoto = function() {
    //alert('Upload from computer Function');
  };
  $scope.takeMobilePhoto = function() {
    //alert('Take a new photo on mobile');
  };
  $scope.selectMobilePhoto = function() {
/*
    checkForLocalhost();
    navigator.camera.getPicture(imageURIReceived, cameraError, { quality: 100,
      destinationType: navigator.camera.DestinationType.IMAGE_URI,
      sourceType: navigator.camera.PictureSourceType.PHOTOLIBRARY,
      correctOrientation: true, // Let Cordova correct the picture orientation (WebViews don't read EXIF data properly)
      targetWidth: 1000,
      popoverOptions: { // iPad camera roll popover position
        width : 768,
        height : 190,
        arrowDir : Camera.PopoverArrowDirection.ARROW_UP
      }
    });
*/
  };
});
