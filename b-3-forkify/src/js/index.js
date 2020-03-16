/**
 * App Controller
 */

import RecipeController from './controllers/Recipe';
import SearchController from './controllers/Search';

/**
 * App State
 *  - Search object
 *    · Current recipes
 *  - Shopping list
 *  - Liked recipes
 */

const state = {
  controllers: {
    recipe: null,
    search: null
  },
  recipe: {},
  search: {
    recipes: []
  }
};

// Init RecipeController
state.controllers.recipe = RecipeController(state);

// Init SearchController
state.controllers.search = SearchController(state);
