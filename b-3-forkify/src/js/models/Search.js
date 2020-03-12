import { request } from '../utils/utils';

export default class Search {
  constructor(query) {
    this.query = query;
  }

  async getResults() {
    const options = {
      url: `https://forkify-api.herokuapp.com/api/search?&q=${this.query}`,
      method: 'GET',
      async: true
    }

    try {
      const res = await request(options);
      this.recipes = JSON.parse(res).recipes;

      return this.recipes;
    } catch(error) {
      console.error(error);
    }
  }
};
