/**
 * DOM Nodes
 */

export const components = {
  result: {
    recipe: (recipe) => {
      return `
        <li>
          <a class="results__link" href="#${recipe.recipe_id}">
            <figure class="results__fig">
              <img src="${recipe.image_url}" alt="${recipe.title}">
            </figure>
            <div class="results__data">
              <h4 class="results__name">${recipe.title}</h4>
              <p class="results__author">${recipe.publisher}</p>
            </div>
          </a>
        </li>`;
    }
  }
};

export const elements = {
  search: {
    form: document.querySelector('.search'),
    input: document.querySelector('.search__field'),
    results: {
      list: document.querySelector('.results__list')
    }
  }
};