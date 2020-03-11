 /**
 * Module pattern with IIFE
 */

const users = (() => {
  const resource = 'https://jsonplaceholder.typicode.com/users';

  return {
    list: async () => {
      return await fetch(resource)
        .then(data => data.json())
        .catch(error => console.error(error));
    },
    add: async (data) => {
      return await fetch(resource, {
        type: 'POST',
        body: JSON.stringify(data)
     })
       .then(data => data.json())
       .catch(error => console.error(error));
    }
  }
})();

/**
 * - Warning! -
 * fetch method does not work in Node console.
 * Use the browser console to run this code.
 */
