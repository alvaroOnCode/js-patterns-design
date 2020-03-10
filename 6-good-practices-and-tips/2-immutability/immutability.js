/**
 * Immutability
 */

const obj = {
  a: 1
};

const obj2 = {
  ...obj,
  b: 2
}

console.log(obj, obj2);
