/**
 * RecipeController
 */

import RecipeModel from '../models/Recipe';
import RecipeView from '../views/Recipe';

import { common, components, elements, namesInDOM } from '../views/base';

export default (state) => new class RecipeController {
  constructor() {
    this.init();
  }

  init = () => {
    // Init RecipeView
    this.view = RecipeView(components, elements, namesInDOM);

    // Add listeners
    const listeners = ['hashchange', 'load'];
    listeners.forEach(event => window.addEventListener(event, this.controlRecipe));
  }

  controlRecipe = async () => {
    // Get ID from URL
    const id = window.location.hash.replace('#', '');
    
    if (id) {
      // Prepare UI for changes
      this.view.clearRecipe();
      common.renderLoader(elements.search.results.main, components.loader(namesInDOM.loader));

      // Create new RecipeModel object and set the App state
      state.recipe = new RecipeModel(id);

      try {
        // Get Recipe data and parse ingredients
        await state.recipe.getRecipe();
        state.recipe.parseIngredients();
        
        // Calculate servings and time
        state.recipe.calcServings();
        state.recipe.calcTime();
        
        // Render Recipe
        common.clearLoader(document.querySelector(`.${namesInDOM.loader}`));
        this.view.renderRecipe(state.recipe);
      } catch(error) {
        console.error(error);
      }
    }
  }
};