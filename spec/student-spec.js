'use strict';

var Student = require('../src/student');
var Person = require('../src/person');

describe('test Student:', function() {

  var Tom = new Student('Tom',21,2);

  it ('should have name age class properties',function() {
    expect(Tom.name).toBe('Tom');
    expect(Tom.age).toBe(21);
    expect(Tom.class).toBe(2);
  });

  it('should be a instance of Person',function() {
    expect(Tom instanceof Person).toBe(true);
  });

  it ('should return introduce I am a Student. I am at Class 2.',function() {
    expect(Tom.introduce()).toBe('I am a Student. I am at Class 2.');
  });
});