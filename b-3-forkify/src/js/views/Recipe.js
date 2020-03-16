/**
 * RecipeView
 */

import { Fraction } from 'fractional';

export default (components, elements, namesInDOM) => new class RecipeView {
  constructor() {}

  formatIngredientCount = count => {
    const [int, dec] = count.toString().split('.').map(item => parseInt(item, 10));

    if (!dec) {
      return count;
    }

    let result = '';
    if (int === 0) {
      const fr = new Fraction(count);
      result = `${fr.numerator}/${fr.denominator}`;
    } else {
      const fr = new Fraction(count - int);
      result = `${int} ${fr.numerator}/${fr.denominator}`;
    }
    
    return result;
  }

  renderIngredients = ingredients => {
    const ings = [];
    ingredients.map(ing => {
      ing.count = ing.count ? this.formatIngredientCount(ing.count) : '?';
      ings.push(components.ingredient(ing));
    });
    return ings.join('');
  }

  renderRecipe = recipe => {
    recipe.ingredients = this.renderIngredients(recipe.ingredients);
    elements.recipe.insertAdjacentHTML('afterbegin', components.recipe(recipe));
  }

  clearRecipe() {
    elements.recipe.innerHTML = '';
  }
};
