/**
 * Composing | Part 3.1
 */

const users = require('./data.users');
const utils = require('./3-utils');

const getFirstChild = utils.compose(
  utils.setResponse,
  //utils.trace('This a log message sent before setting up the response.'),
  utils.setUser,
  utils.head,
  utils.filter(x => x.age < 10)
);

console.log(getFirstChild(users));
