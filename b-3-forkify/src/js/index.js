/**
 * Global app controller
 */

import SearchController from './controllers/Search';

/**
 * Global app state
 * - Search object
 * - Current Recipe object
 * - Shopping List object
 * - Liked recipes
 */

const state = {};

const sca = SearchController(state);