/**
 * Prototype Chain
 */

const Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;
};

Person.prototype.calculateAge = function() {
  const y = new Date().getFullYear();
  return (y - this.yearOfBirth);
};

Person.prototype.isPerson = true;

/**
 * Use case
 */

const jane = new Person('Jane', 1969, 'Designer');
const john = new Person('John', 1990, 'Teacher');
const mark = new Person('Mark', 1948, 'Retired');

/**
 * - Warning! -
 * Prototype Chain: jane, john and mark < Person < Object.
 * To prove the inheritance...
 */

console.log(john.__proto__ === Person.prototype); // true
console.log(jane.__proto__ === Person.prototype); // true
console.log(mark.__proto__ === Person.prototype); // true

console.log(jane.hasOwnProperty('job')); // true
console.log(jane.hasOwnProperty('isPerson')); // false because it is inherited

console.log(jane instanceof Person); // true

/**
 * - Just for fun! -
 * Arrays in JavaScript are Objects too.
 * Prototype Chain: a < Array < Object
 * Run code bellow in browser console.
 */

const a = [0, 2, 4];
console.info(a);
