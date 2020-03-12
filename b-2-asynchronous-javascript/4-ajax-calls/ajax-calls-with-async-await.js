/**
 * AJAX Calls with Async/Await
 */

/**
 * - Warning! -
 * Run the index.html in a modern browser.
 * Check utils.js in index.html.
 */

const withAsyncAwait = async () => {
  const options = {
    url: 'https://jsonplaceholder.typicode.com/users',
    method: 'GET',
    async: true
  };
  
  const data = await request(options);
  console.log(`AJAX Call with Async/Await: ${data}`);
};
  