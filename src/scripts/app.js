'use strict';

/**
 *  Phonegap initialization
 */
var phonegapApp = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {

        // Wait for PhoneGap to load
        if( document.documentElement.hasOwnProperty('ontouchstart') ) {
            phonegapApp.touchInterface = true;
            document.addEventListener("deviceready", this.onDeviceReady, false);
        } else {
            // The browser has no touch capabilities
            phonegapApp.touchInterface = false;
            document.addEventListener('DOMContentLoaded', function () {
                phonegapApp.receivedEvent('deviceready');
            });
        }
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicity call 'phonegapApp.receivedEvent(...);'
    onDeviceReady: function() {
        phonegapApp.receivedEvent('deviceready');

    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        switch( id ) {
            case 'deviceready':
                break;
        }
    }
};

var app = angular.module('App', ['hmTouchEvents'])
    .config(['$routeProvider', function($routeProvider) {
        $routeProvider.when('/list', { templateUrl: 'htmlPartials/List.html', controller: 'ListController' });
        $routeProvider.when('/logout', { templateUrl: 'htmlPartials/logout.html', controller: 'LogoutController' });
        $routeProvider.when('/profile', { templateUrl: 'htmlPartials/Profile.html', controller: 'ProfileController' });
        $routeProvider.when('/photo', { templateUrl: 'htmlPartials/Photo.html', controller: 'PhotoController' });
        $routeProvider.when('/', {templateUrl: 'htmlPartials/Login.html', controller: 'LoginController'}).otherwise({redirectTo: '/'});
}]);