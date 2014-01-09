'use strict';

describe('Controller: ProfileCtrl', function () {

  // load the controller's module
  beforeEach(module('rootSnapApp'));

  var ProfileCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ProfileCtrl = $controller('ProfileCtrl', {
      $scope: scope,
      person: {id: '123'},
      portraitURL: ''
    });
  }));

  it('should initialize correctly', function () {
    expect(scope.person.id).toBe('123');
  });
});
