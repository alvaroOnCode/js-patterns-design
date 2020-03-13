import SearchModel from '../models/Search';
import searchView from '../views/search';

export default (state) => new class SearchController {
  constructor() {
    this.init();
  }

  init() {
    document.querySelector('.search')
      .addEventListener('submit', event => {
        event.preventDefault();
        this.controlSearch();
      });
  }

  async controlSearch() {
    // TODO: Get the query from the view
    const query = 'pizza';

    if (query) {
      // Create a new Search object and set the global state
      state.search = new SearchModel(query);

      // Prepare UI for search results

      // Search for recipes
      await state.search.getResults();

      // Render results on UI
      console.log('Results:', state.search.recipes);
    }
  }
};
