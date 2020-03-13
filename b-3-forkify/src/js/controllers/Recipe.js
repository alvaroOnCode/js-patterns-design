/**
 * RecipeController
 */

import RecipeModel from '../models/Recipe';
import RecipeView from '../views/Recipe';

import { components, elements, namesInDOM } from '../views/base';

export default (state) => new class RecipeController {
  constructor() {
    this.init();
  }

  init() {
    const r = new RecipeModel('47746');
    r.getRecipe();
  }
};
