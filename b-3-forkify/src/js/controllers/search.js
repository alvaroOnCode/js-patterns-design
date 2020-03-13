/**
 * SearchController
 */

import SearchModel from '../models/Search';
import SearchView from '../views/Search';

import { components, elements, namesInDOM } from '../views/base';

export default (state) => new class SearchController {
  constructor() {
    this.init();

    // Init SearchView
    this.view = SearchView(components, elements, namesInDOM);
  }

  init() {
    elements.search.form
      .addEventListener('submit', event => {
        event.preventDefault();
        this.controlSearch();
      });
  }

  async controlSearch() {
    // Get the query from the view
    const query = this.view.getInput();

    if (query) {
      // Create a new Search object and set the global state
      state.search = new SearchModel(query);

      // Prepare UI for search results
      this.view.clearInput();
      this.view.clearResults();
      this.view.renderLoader(elements.search.results.main);

      // Search for recipes
      await state.search.getResults();

      // Render results on UI
      this.view.clearLoader();
      this.view.renderResults(state.search.recipes);
    }
  }
};
