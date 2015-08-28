'use strict';

var Teacher = require('../src/teacher');
var Student = require('../src/student');
var Class = require('../src/class');
var Person = require('../src/person');

describe('teacher:', function () {

  it('should have name age class properties', function () {

    var klass = new Class(2);
    var teacher = new Teacher('Tom',21,klass);
    expect(teacher.name).toBe('Tom');
    expect(teacher.age).toBe(21);
    expect(teacher.class).toBe(2);

  });

  it('should be a instance of Person', function () {

    var klass = new Class(2);
    var teacher = new Teacher('Tom',21,klass);
    expect(teacher instanceof Person).toBe(true);
  });

  it('should return introduce My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.', function () {

    var klass = new Class(2);
    var teacher = new Teacher('Tom',21,klass);
    expect(teacher.introduce()).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.');

  });

  it('should return introduce My name is Tom. I am 21 years old. I am a Teacher. I am at No Class.', function () {

    var teacher = new Teacher('Tom', 21);
    expect(teacher.introduce()).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.');

  });

  it ('should return introduce My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.',function() {
    var klass = new Class(2);
    var teacher = new Teacher('Tom',21,klass);
    var jerry = new Student('Jerry',21,klass);
    expect(teacher.introduceWith(jerry)).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach Jerry.');
  });

  it("should return introduce My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.", function () {
    var klass = new Class(2);
    var klass2 = new Class(3);
    var teacher = new Teacher('Tom', 21, klass);
    var jerry = new Student('Jerry', 21, klass2);
    expect(teacher.introduceWith(jerry)).toBe("My name is Tom. I am 21 years old. I am a Teacher. I don't teach Jerry.");
  });

});