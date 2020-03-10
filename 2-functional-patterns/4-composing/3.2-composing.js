/**
 * Composing | Part 3
 */

const users = require('./data.users');
const utils = require('./3-utils');

const getFirstChild = utils.pipe(
  utils.filter(x => x.age < 10),
  utils.head,
  utils.setUser,
  utils.setResponse
);

console.log(getFirstChild(users));
