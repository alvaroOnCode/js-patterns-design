/**
 * Global app controller
 */

import searchController from './controllers/search';
import A from './controllers/A';

/**
 * Global app state
 * - Search object
 * - Current Recipe object
 * - Shopping List object
 * - Liked recipes
 */

const state = {};

console.log(A);

const a = A('What', 'the');
const b = new a('fuck!');
b.foo();

console.log(a);
console.log(b);