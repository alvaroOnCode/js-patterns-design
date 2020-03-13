/**
 * Global App Controller
 */

import SearchController from './controllers/Search';

/**
 * Global App State
 *  - Search object
 *    · Current recipes
 *  - Shopping list
 *  - Liked recipes
 */

const state = {
  search: {
    recipes: []
  }
};

// Init SearchController
const sca = SearchController(state);