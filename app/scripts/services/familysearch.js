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
      return this.$getDisplayGender() === 'Male';
    };

    FS.rsUploadFile = function(person, file) {
      var fd = new FormData();
      fd.append('artifact', file);

      // create a memory
      var memory = new FS.Memory({$data: fd});
      return memory.$save(true).then(function() {

        // create a memory persona
        var mar = new FS.MemoryArtifactRef({description: memory.about});
        var persona = new FS.MemoryPersona({$memoryId: memory.id, name: person.$getDisplayName(), memoryArtifactRef: mar});
        return persona.$save().then(function(response) {
          // response is memory persona url

          // create a memory persona ref
          var personaRef = new FS.MemoryPersonaRef({$personId: person.id, memoryPersona: response});
          return personaRef.$save().then(function() {
            // success
            return memory;
          });
        });
      });
    };

    // Public API here
    return FS;
  });