/**
 * Primitives vs Object
 */

/**
 * Primitives own their values.
 */
let a = 1;
const b = a;

a = 3;

console.log(`a equals ${a} and b equals ${b}.`);

/**
 * - Warning! -
 * Objects 'do not own' their values.
 * They point to the reference where value is.
 */

let jane = {
  name: 'Jane',
  age: '51'
};

const mary = jane;

jane.name = 'Mary';

/**
 * - Warning! -
 * 🤔 Both names (jane's and mary's) are 'Mary'.
 */

console.log(`jane's name is ${jane.name} and mary's name is ${mary.name}.`);

/**
 * What about functions?
 */

const age = 27;
const jonas = {
  name: 'Jonas',
  city: 'Lisbon'
};

function change(a, b) {
  a = 30;
  b.city = 'Sevilla';
}

console.log(`Before | ${jonas.name} is ${age} year(s) old and lives in ${jonas.city}.`);

change(age, jonas);

/**
 * - Warning! -
 * age will not change, of course, but jonas' city will
 * because what is passed as parameter is the reference
 * not the object itself.
 */

console.log(`After | ${jonas.name} is ${age} year(s) old and lives in ${jonas.city}.`);
