/**
 * SearchView
 */

export default (components, elements) => new class SearchView {
  constructor() {
    
  }

  getInput() {
    return elements.search.input.value;
  }

  renderRecipe(recipe) {
    elements.search.results.list.innerHTML += components.result.recipe(recipe);
  }

  renderResults(recipes) {
    recipes.forEach(this.renderRecipe); 
  }
};
