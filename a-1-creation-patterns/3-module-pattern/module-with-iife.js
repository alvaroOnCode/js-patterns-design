/**
 * Module pattern with IIFE
 */

const result = (() => {
  // This is private
  const x = {};

  // This is public
  return {
    a: () => console.log(x),
    b: (key, val) => x[key] = val
  }
})();

result.a();
result.b('name', 'Álvaro');
result.a();

console.log(result.x);

/**
 * - Warning! -
 * Logging result.x returns undefined because it is private.
 */
