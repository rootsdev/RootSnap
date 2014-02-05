'use strict';

angular.module('rootSnapApp')
  .factory('familysearch', function ($window, $http, $q, $timeout) {
    var FS = $window.FamilySearch;

    FS.init({
      /* jshint camelcase:false */
      app_key: 'WCQY-7J1Q-GKVV-7DNM-SQ5M-9Q5H-JX3H-CMJK',
      environment: 'sandbox',
      auth_callback: 'http://localhost:9000/#!/auth',
      http_function: $http,
      deferred_function: $q.defer,
      timeout_function: $timeout,
      save_access_token: true,
      auto_expire: true,
      auto_signin: true
    });

    FS.Person.prototype.rsIsMale = function() {
      return this.display.gender === 'Male';
    };

    FS.rsUploadFile = function(person, file) {
      var fd = new FormData();
      fd.append('artifact', file);
      // add memory
      return FS.createMemory(fd).then(function(response) {
        // response === memory id

        // read the memory
        return FS.getMemory(response).then(function(response) {
          var memory = response.getMemory();

          // create a memory persona
          var persona = new FS.MemoryPersona(person.$getDisplayName(), memory.about);

          // add the memory persona to the memory
          return memory.$addMemoryPersona(persona).then(function(response) {
            // response === MemoryPersonaRef

            // add the memory persona ref to the person
            return person.$addMemoryPersonaRef(response).then(function() {
              // success
              return memory;
            });
          });
        });
      });
    };

    // Public API here
    return FS;
  });
