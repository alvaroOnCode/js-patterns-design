/**
 * SearchModel
 */

import { request } from '../utils/utils';

export default class RecipeModel {
  constructor(id) {
    this.id = id;
  }

  async getRecipe() {
    const options = {
      url: `https://forkify-api.herokuapp.com/api/get?rId=${this.id}`,
      method: 'GET',
      async: true
    }

    try {
      const res = await request(options);
      console.log(res);
    } catch(error) {
      console.error(error);
    }
  }
};
