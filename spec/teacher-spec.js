'use strict';
var Teacher = require('../src/teacher');
var Student = require('../src/student');

describe('teacher:', function () {

  it('should have name age class properties', function () {

    var teacher = new Teacher('Tom', 21, 2);
    expect(teacher.name).toBe('Tom');
    expect(teacher.age).toBe(21);
    expect(teacher.class).toBe(2);

  });

  it('should return introduce My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.', function () {

    var teacher = new Teacher('Tom', 21, 2);
    expect(teacher.introduce()).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach Class 2.');

  });

  it('should return introduce My name is Tom. I am 21 years old. I am a Teacher. I am at No Class.', function () {

    var teacher = new Teacher('Tom', 21);
    expect(teacher.introduce()).toBe('My name is Tom. I am 21 years old. I am a Teacher. I teach No Class.');

  });

});