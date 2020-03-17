/**
 * App Controller
 */

import RecipeController from './controllers/Recipe';
import SearchController from './controllers/Search';

/**
 * - App State -
 *  · Search object
 *    · Current recipes
 *  · Shopping list
 *  · Liked recipes
 */

const state = {
  recipe: {},
  search: {
    recipes: []
  }
};

// Init RecipeController
RecipeController(state);

// Init SearchController
SearchController(state);
