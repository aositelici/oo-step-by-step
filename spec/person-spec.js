'use strict';

var Person = require('../src/person');


describe('test person:', function () {

  it('should have name age properties', function () {
    var person = new Person('Tom', 21);
    expect(person.name).toBe('Tom');
    expect(person.age).toBe(21);
  });

  it('should return introduce My name is Tom. I am 21 years old', function () {
    var person = new Person('Tom', 21);
    expect(person.introduce()).toBe('My name is Tom. I am 21 years old.');
  });
});