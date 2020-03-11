/**
 * Callbacks (Hell)
 */

/**
 * - Example -
 * Resources download simulated with setTimeout
 */

(() => {
  setTimeout(() => {
    const recipesId = [159, 845, 265, 753, 101];
    console.log(`Recipes ID: ${recipesId}`);

    setTimeout(() => {
      const recipe = {
        title: 'Carrillada al Pedro Ximénez',
        publisher: 'Faraón Saavedra de Las Letanías'
      };
      console.log(`# ${recipe.title} by ${recipe.publisher}`);

      setTimeout(publisher => {
        const recipe = {
          title: 'Arroz con corvina',
          publisher
        }
        console.log(`# ${recipe.title} by ${recipe.publisher}`);

        setTimeout(publisher => {
          const recipe = {
            title: 'Chícharos',
            publisher
          }
          console.log(`# ${recipe.title} by ${recipe.publisher}`);
        }, 1500, recipe.publisher);
      }, 1500, recipe.publisher);
    }, 1500);
  }, 1500);
})();
