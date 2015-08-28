var Person = require('./person');

function Teacher(name, age, klass) {
  Person.call(this, name, age);
  this.class = klass;
}

Teacher.prototype = Object.create(Person.prototype);
Teacher.prototype.constructor = Teacher;

Teacher.prototype.super_introduce = Person.prototype.introduce;

Teacher.prototype.introduce = function () {

  if (!this.class) {
    return this.super_introduce() + ' I am a Teacher. I teach No Class.';
  }
  else {
    return this.super_introduce() + ' I am a Teacher. I teach Class ' + this.class + '.';
  }

};

module.exports = Teacher;