/**
 * SearchView
 */

export default (components, elements, namesInDOM) => new class SearchView {
  constructor() {}

  getInput = () => {
    return elements.search.input.value;
  }

  clearInput = () => {
    elements.search.input.value = '';
  }

  /**
   * 'Carrillada al Pedro Ximénez con patatas fritas'
   * acc = 0  | acc + cur.length = 10 | 10 <= limit = true  | newTitle = ['Carrillada']
   * acc = 10 | acc + cur.length = 12 | 12 <= limit = true  | newTitle = ['Carrillada', 'al']
   * acc = 12 | acc + cur.length = 17 | 17 <= limit = true  | newTitle = ['Carrillada', 'al', 'Pedro']
   * acc = 17 | acc + cur.length = 24 | 24 <= limit = false | newTitle = ['Carrillada', 'al', 'Pedro']
   * acc = 24 | acc + cur.length = 27 | 27 <= limit = false | newTitle = ['Carrillada', 'al', 'Pedro']
   * acc = 27 | acc + cur.length = 34 | 31 <= limit = false | newTitle = ['Carrillada', 'al', 'Pedro']
   * acc = 34 | acc + cur.length = 40 | 37 <= limit = false | newTitle = ['Carrillada', 'al', 'Pedro']
   */
  limitRecipeTitle = (title, limit = 15) => {
    const newTitle = [];

    if (title.length > limit) {
      title.split(' ').reduce((acc, cur) => {
        if (acc + cur.length <= limit) {
          newTitle.push(cur);
        }

        return acc + cur.length;
      }, 0);

      return `${newTitle.join(' ')} [...]`;
    }

    return title;
  }

  renderRecipe = (recipe) => {
    recipe.title = this.limitRecipeTitle(recipe.title);
    elements.search.results.list.insertAdjacentHTML('beforeend', components.result.recipe(recipe));
  }

  renderResults = (recipes) => {
    recipes.forEach(this.renderRecipe); 
  }

  clearResults = () => {
    elements.search.results.list.innerHTML = '';
  }
  
  renderLoader = parent => {
    parent.insertAdjacentHTML('afterbegin', components.loader(namesInDOM.loader));
  }

  clearLoader = () => {
    const loader = document.querySelector(`.${namesInDOM.loader}`);

    if (loader) {
      loader.parentElement.removeChild(loader);
    }
  }
};
