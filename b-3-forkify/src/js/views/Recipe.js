/**
 * RecipeView
 */

import { Fraction } from 'fractional';

export default (components, elements) => new class RecipeView {
  constructor() {}

  formatIngredientCount = count => {
    // count = 2.5 | 5/2 | 2 1/2
    // count = 0.5 | 1/2
    const newCount = Math.round((count * 10000) / 10000);
    const [int, dec] = newCount.toString().split('.').map(item => parseInt(item, 10));

    if (!dec) {
      return newCount;
    }

    let result = '';
    if (int === 0) {
      const fr = new Fraction(newCount);
      result = `${fr.numerator}/${fr.denominator}`;
    } else {
      const fr = new Fraction(newCount - int);
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

  renderRecipe = (recipe, isLiked) => {
    const ingredients = this.renderIngredients(recipe.ingredients);
    elements.recipe.main.insertAdjacentHTML('afterbegin', components.recipe(recipe, isLiked, ingredients));
  }

  clearRecipe() {
    elements.recipe.main.innerHTML = '';
  }

  updateServingsIngredients = recipe => {
    // Servings
    document.querySelector('.recipe__info-data--people').textContent = recipe.servings;

    // Ingredients
    const countElements = Array.from(document.querySelectorAll('.recipe__count'));
    countElements.forEach((count, index) => {
      count.textContent = this.formatIngredientCount(recipe.ingredients[index].count);
    });
  }
};
