/**
 * Function Constructors
 */

/**
 * ☹️ This code will work but instead of doing this...
 * It is not a big deal to manage a one line of code method
 * but it is if it had a lot of lines because every instance
 * would have exactly the same amout of code inside.
 */

const Person = function(name, yearOfBirth, job) {
  this.name = name;
  this.yearOfBirth = yearOfBirth;
  this.job = job;

  /*
  this.calculateAge = function() {
    const y = new Date().getFullYear();
    return (y - this.yearOfBirth);
  }
  */
};

/**
 * 😃 ... It is better to do this.
 * Upgrading the prototype is the way to avoid the performance issue
 * mentioned before.
 */

Person.prototype.calculateAge = function() {
  const y = new Date().getFullYear();
  return (y - this.yearOfBirth);
};

/**
 * Use case
 */

const jane = new Person('Jane', 1969, 'Designer');
const john = new Person('John', 1990, 'Teacher');
const mark = new Person('Mark', 1948, 'Retired');

console.log(jane.calculateAge());
console.log(john.calculateAge());
console.log(mark.calculateAge());
