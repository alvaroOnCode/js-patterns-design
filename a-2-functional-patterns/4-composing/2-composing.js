/**
 * Composing | Part 2
 */

// Data
const users = require('./data.users');

// Functions
const compose = (...fns) => input => fns.reduceRight((allFns, currentFn) => currentFn(allFns), input);

const filter = f => xs => xs.filter(f);

const head = items => items[0];

const setUser = user => ({
  fullName: `${user.firstName} ${user.lastName}`,
  age: user.age
});

const setResponse = user => `${user.fullName} is ${user.age} year(s) old.`;

/**
 * ☹️ This function will work but instead of doing this...
 */
const getFirstChild = data =>
  compose(
    setResponse,
    setUser,
    head,
    xs => xs.filter(x => x.age < 10)
  )(data);

console.log(getFirstChild(users));

/**
 * 😃 ... It is better to do this (Point free)
 */
const getFirstChildWithPointFree = compose(
  setResponse,
  setUser,
  head,
  filter(x => x.age < 10)
);

console.log(getFirstChildWithPointFree(users));

/**
 * - Warning! -
 * This code is even cleaner than code in 1-composing.js but it can be improved 😉.
 * Check 3.x-composing.js and 3-utils.js for the final versions.
 */
