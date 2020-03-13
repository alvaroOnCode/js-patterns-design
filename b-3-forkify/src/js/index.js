/**
 * Global App Controller
 */

import RecipeController from './controllers/Recipe';
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

// Init RecipeController
RecipeController(state);

// Init SearchController
SearchController(state);