/**
 * DOM Nodes
 */

export const components = {
  loader: className => `
    <div class="${className}">
      <svg>
        <use href="img/icons.svg#icon-cw"></use>
      </svg>
    </div>`
  ,
  pagButton: btn => `
    <button class="btn-inline results__btn--${btn.type}" data-goto="${btn.type === 'prev' ? btn.page - 1 : btn.page + 1}">
      <svg class="search__icon" style="display: ${btn.type === 'prev' ? 'block' : 'none'};">
        <use href="img/icons.svg#icon-triangle-left"></use>
      </svg>
      <span>Page ${btn.type === 'prev' ? btn.page - 1 : btn.page + 1}</span>
      <svg class="search__icon" style="display: ${btn.type === 'next' ? 'block' : 'none'};">
        <use href="img/icons.svg#icon-triangle-right"></use>
      </svg>
    </button>`
  ,
  result: {
    recipe: recipe => `
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
      </li>`
  }
};

export const elements = {
  search: {
    form: document.querySelector('.search'),
    input: document.querySelector('.search__field'),
    results: {
      list: document.querySelector('.results__list'),
      main: document.querySelector('.results'),
      pages: document.querySelector('.results__pages')
    }
  }
};

export const namesInDOM = {
  loader: 'loader'
};
