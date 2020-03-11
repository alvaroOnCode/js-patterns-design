/**
 * Composing | Part 3.2
 */

const users = require('./data.users');
const utils = require('./3-utils');

const getFirstChild = utils.pipe(
  utils.filter(x => x.age < 10),
  //utils.trace('This a log message sent after the filter call.'),
  utils.head,
  utils.setUser,
  utils.setResponse
);

console.log(getFirstChild(users));
