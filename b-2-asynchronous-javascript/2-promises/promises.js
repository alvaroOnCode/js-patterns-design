/**
 * Promises
 */

/**
 * - Example -
 * Resources download simulated with setTimeout.
 * Forget about the hardcoding.
 */

const getRecipesId = new Promise((resolve, reject) => {
  try {
    setTimeout(() => {
      resolve([159, 845, 265, 753, 101]);
    }, 1500);
  } catch(error) {
    reject(error);
  }
});

const getRecipe = id => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(_id => {
        const recipe = {
          title: 'Carrillada al Pedro Ximénez',
          publisher: 'Jane'
        };

        resolve(`# ${_id}: ${recipe.title} by ${recipe.publisher}`);
    }, 1500, id);
    } catch(error) {
      reject(error);
    }
  });
};

const getRelated = publisher => {
  return new Promise((resolve, reject) => {
    try {
      setTimeout(_publisher => {
        const recipe = {
          title: 'Arroz con corvina',
          publisher: 'Jane'
        };
  
          resolve(`  · More of ${_publisher}: ${recipe.title}`);
    }, 1500, publisher);
    } catch(error) {
      reject(error);
    }
  });
};

getRecipesId
  .then(ids => {
    console.log(ids);
    const id = ids[2];
    return getRecipe(id);
  })
  .then(recipe => {
    console.log(recipe);
    return getRelated('Jane');
  })
  .then(publisher => {
    console.log(publisher);
  })
  .catch(error => console.error(error));
 