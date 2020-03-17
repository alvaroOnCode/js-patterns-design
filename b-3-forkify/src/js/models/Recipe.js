/**
 * RecipeModel
 */

import { request } from '../utils/utils';

export default class RecipeModel {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    const options = {
      url: `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`,
      method: 'GET',
      async: true
    };
  
    try {
      const res = await request(options);
      const recipe = JSON.parse(res).recipe;

      const {
        image_url,
        ingredients,
        publisher,
        publisher_url,
        recipe_id,
        social_rank,
        source_url,
        title
      } = recipe;

      this.image_url = image_url;
      this.ingredients = ingredients;
      this.publisher = publisher;
      this.publisher_url = publisher_url;
      this.recipe_id = recipe_id;
      this.social_rank = social_rank;
      this.source_url = source_url;
      this.title = title;
    } catch(error) {
      console.error(error);
    }
  }

  calcServings() {
    this.servings = 4;
  }

  calcTime() {
    // Assuming that we need 15 minutes for each 3 ingredients
    const totalIngredients = this.ingredients.length;
    const periods = Math.ceil(totalIngredients / 3);
    this.time = periods * 15;
  }

  parseIngredients() {
    const unitsLong = ['cups', 'ounces', 'ounce', 'pounds', 'tablespoons', 'tablespoon', 'teaspoons', 'teaspoon'];
    const unitsShort = ['cup', 'ozs', 'oz', 'pound', 'tbsp', 'tbsp', 'tsp', 'tsp'];
    const units = [...unitsShort, 'kg', 'g'];

    const newIngredients = this.ingredients.map(item => {
      // Uniform units
      let ing = item.toLowerCase();

      unitsLong.forEach((unit, index) => {
        ing = ing.replace(unit, unitsShort[index]);
      });

      // Remove parenthesis
      ing = ing.replace(/ *\([^)]*\) */g, " ");

      // Parse ingredients into counts, units and ingredient
      const arrayIng = ing.split(' ');
      const unitIndex = arrayIng.findIndex(el => units.includes(el));

      let objIng = {};

      if (unitIndex > -1) {
        // There is a unit
        // Example A) 4 1/2 cups | arrayCount = [4, 1/2] | eval("4+1/2") = 4.5
        // Example B) 4 cups     | arrayCount = [4]

        const arrayCount = arrayIng.slice(0, unitIndex);
        let count = -1;

        if (arrayCount.length === 1) {
          count = eval(arrayIng[0].replace('-', '+'));
        } else {
          count = eval(arrayIng.slice(0, unitIndex).join('+'));
        }

        objIng = {
          count,
          unit: arrayIng[unitIndex],
          ingredient: arrayIng.slice(unitIndex + 1).join(' ')
        };
      } else if (parseInt(arrayIng[0], 10)) {
        // There is no unit but first element is a number
        objIng = {
          count: parseInt(arrayIng[0], 10),
          unit: '',
          ingredient: arrayIng.slice(1).join(' ')
        };
      } else if (unitIndex === -1) {
        // There is no unit and no number in first position
        objIng = {
          count: 1,
          unit: '',
          ingredient: ing
        };
      }

      return objIng;
    });

    this.ingredients = newIngredients;
  }

  updateServings = type => {
    // Servings
    const newServings = type === 'dec' ? this.servings - 1 : this.servings + 1;

    // Ingredients
    this.ingredients.forEach(ing => {
      ing.count *= (newServings / this.servings);
    });

    this.servings = newServings;
  }
};
