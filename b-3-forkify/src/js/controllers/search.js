import Search from '../models/Search';
import searchView from '../views/search';

const controlSearch = () => {
  // Get the query from the view
  const query = 'pizza';
  
  if (query) {
    // Create a new Search object and set the global state
    const search = new Search(query);
  }
};

document.querySelector('.search')
  .addEventListener('submit', event => {
    event.preventDefault();
    controlSearch();
  });


