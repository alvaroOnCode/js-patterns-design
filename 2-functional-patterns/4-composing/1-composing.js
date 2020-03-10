/**
 * Composing | Part 1
 */

// Data
const users = require('./data.users');

// Functions
const head = items => items[0];

const setUser = user => ({
  fullName: `${user.firstName} ${user.lastName}`,
  age: user.age
});

const setResponse = user => `${user.fullName} is ${user.age} year(s) old.`;

const getFirstChild = data => setResponse(setUser(head(data.filter(user => user.age < 10))));

// Logging
console.log(getFirstChild(users));

/**
 * - Warning! -
 * This is a very clean code but it is kind of difficult to read.
 * Check 2-composing.js for an improved version.
 */
