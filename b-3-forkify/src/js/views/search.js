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

  renderRecipe = recipe => {
    recipe.title = this.limitRecipeTitle(recipe.title);
    elements.search.results.list.insertAdjacentHTML('beforeend', components.result.recipe(recipe));
  }

  renderResults = (recipes, page = 1, perPage = 10) => {
    // Current page results
    const start = (page - 1) * perPage;
    const end = start + perPage;

    recipes.slice(start, end).forEach(this.renderRecipe);

    // Pagination buttons
    this.renderPagButtons(page, recipes.length, perPage);
  }

  clearResults = () => {
    elements.search.results.list.innerHTML = '';
  }

  getPagButton = components.pagButton;

  renderPagButtons = (page, totalResults, perPage) => {
    const pages = Math.ceil(totalResults / perPage);

    if (pages > 1) {
      let btns = '';

      if (page === 1) {
        btns = this.getPagButton({
          type: 'next',
          page
        });
      } else if (page > 1 && page < pages) {
        btns = `
          ${this.getPagButton({
            type: 'prev',
            page
          })}
          ${this.getPagButton({
            type: 'next',
            page
          })}`;
      } else if (pages === pages) {
        btns = this.getPagButton({
          type: 'prev',
          page
        });
      }

      elements.search.results.pages.insertAdjacentHTML('afterbegin', btns);
    }
  }

  clearPagButtons = () => {
    elements.search.results.pages.innerHTML = '';
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
