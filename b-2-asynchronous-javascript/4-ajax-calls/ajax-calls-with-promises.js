/**
 * AJAX Calls with Promises
 */

/**
 * - Warning! -
 * Run the index.html in a modern browser.
 * Check utils.js in index.html.
 */

const withPromises = () => {
  const options = {
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
    async: true
  }
  
  request(options)
    .then(data => console.log(`AJAX Call with Promises: ${data}`))
    .catch(error => console.error(error));
};
