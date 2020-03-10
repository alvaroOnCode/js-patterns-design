/**
 * Currying
 */

/**
 * Original function.
 */
const add = (a, b) => a + b;
add(3, 5);

/**
 * Currying a function means to chain functions
 * with only one input parameter.
 */
const curryingAdd = a => b => a + b;
curryingAdd(3)(5);
