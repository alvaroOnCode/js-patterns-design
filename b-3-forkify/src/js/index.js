/**
 * App Controller
 */

import LikesController from './controllers/Likes';
import ListController from './controllers/List';
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
  list: {},
  recipe: {},
  search: {
    recipes: []
  }
};

// Init ListController
LikesController(state);

// Init ListController
ListController(state);

// Init RecipeController
RecipeController(state);

// Init SearchController
SearchController(state);
