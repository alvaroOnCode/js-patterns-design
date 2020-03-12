/**
 * Async/Await
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

async function getRecipes() {
  /**
   * - Warning! -
   * Mind that the first Promise call has no () on it.
   */

  const ids = await getRecipesId;
  const id = ids[2];

  const recipe = await getRecipe(id);
  console.log(recipe);

  const related = await getRelated('Jane');
  console.log(related);

  return recipe;
}

/**
 * ☹️ This code will not work like this:
 * const result = getRecipes();
 * console.log(result);
 * It will return a pending Promise, not the result.
 */

/**
 * 😃 So this is the way to do it.
 */

getRecipes()
  .then(result => console.log(`${result} is my favourite!`))
  .catch(error => console.error(error));
 