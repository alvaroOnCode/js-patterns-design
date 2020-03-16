/**
 * SearchController
 */

import SearchModel from '../models/Search';
import SearchView from '../views/Search';

import { common, components, elements, namesInDOM } from '../views/base';

export default (state) => new class SearchController {
  constructor() {
    this.init();
  }

  init() {
    // Init SearchView
    this.view = SearchView(components, elements, namesInDOM);

    // Add listeners
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
      // Prepare UI for search results
      this.view.clearInput();
      this.view.clearResults();
      common.renderLoader(elements.search.results.main, components.loader(namesInDOM.loader));

      // Create a new SearchModel object and set the App state
      state.search = new SearchModel(query);

      try {
        // Search for recipes
        await state.search.getResults();

        // Render results on UI
        common.clearLoader(document.querySelector(`.${namesInDOM.loader}`));
        this.view.renderResults(state.search.recipes);
      } catch(error) {
        comsole.error(errror)
      }
    }
  }
};
