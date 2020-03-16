/**
 * RecipeView
 */

export default (components, elements, namesInDOM) => new class RecipeView {
  constructor() {}

  renderIngredients = ingredients => {
    const ings = [];
    ingredients.map(ing => ings.push(components.ingredient(ing)));
    return (ings.join(''));
  }

  renderRecipe = recipe => {
    recipe.ingredients = this.renderIngredients(recipe.ingredients);
    elements.recipe.insertAdjacentHTML('afterbegin', components.recipe(recipe));
  }

  clearRecipe() {
    elements.recipe.innerHTML = '';
  }
};
