'use strict';

describe('Service: familysearch', function () {

  // load the service's module
  beforeEach(module('rootSnapApp'));

  // instantiate service
  var familysearch;
  beforeEach(inject(function (_familysearch_) {
    familysearch = _familysearch_;
  }));

  it('should do something', function () {
    expect(!!familysearch).toBe(true);
  });

});
