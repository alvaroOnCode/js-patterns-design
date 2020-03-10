/**
 * Point free
 */

const foo = (route, cb) => {
  // A lot lines of code here...
  const result = aReallyHeavyFunction();
  cb(result);
};

/**
 * ☹️ Instead of doing this...
 */
foo('/users', result => {
  // Some code here...
});

/**
 * 😃 ... It is better to do this (Point free)
 */
const handler = result => {
  // Some code here...
};

foo('/users', handler);