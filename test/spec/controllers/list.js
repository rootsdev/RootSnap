'use strict';

describe('Controller: ListCtrl', function () {

  // load the controller's module
  beforeEach(module('rootSnapApp'));

  var ListCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    ListCtrl = $controller('ListCtrl', {
      $scope: scope,
      ancestry: [{id: '123'}]
    });
  }));

  it('should initialize correctly', function () {
    expect(scope.ancestry.length).toBe(1);
    expect(scope.ancestry[0].id).toBe('123');
  });
});
