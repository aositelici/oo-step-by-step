'use strict';

var Worker = require('../src/worker');
var Person = require('../src/person');

describe('worker:', function() {
  var Tom = new Worker('Tom',21);

  it ('should have name age class properties',function() {

    expect(Tom.name).toBe('Tom');
    expect(Tom.age).toBe(21);

  });

  it ('worker should be a instance of Person',function() {

    expect(Tom instanceof Person).toBe(true);

  });

  it ('should return introduce I am a Worker. I have a job.',function() {

    expect(Tom.introduce()).toBe('I am a Worker. I have a job.');
  });
});