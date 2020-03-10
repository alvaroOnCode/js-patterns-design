/**
 * Composing | Part 3
 */

const users = require('./data.users');
const utils = require('./3-utils');

const getFirstChild = utils.compose(
  utils.setResponse,
  utils.setUser,
  utils.head,
  utils.filter(x => x.age < 10)
);

console.log(getFirstChild(users));
