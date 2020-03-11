/**
 * Iterator
 */

function* iterator(collection) {
  let nextIndex = 0;

  while(nextIndex < collection.length) {
    yield collection[nextIndex++]
  }
}

/**
 * Use case
 */

const x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const gen = iterator(x);

console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());
console.log(gen.next());

/**
 * - Warning! -
 * It returns and object with two properties: 'value' and 'done'.
 * Property done will be true when 'value' equals input array length.
 */
