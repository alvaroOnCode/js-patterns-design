/**
 * ListModel
 */

import uniqid from 'uniqid';

export default new class ListModel {
  constructor() {
    this.items = [];
  }

  addItem(count, unit, ing) {
    const item = {
      id: uniqid(),
      count,
      unit,
      ing
    };

    this.items.push(item);

    return item;
  }

  deleteItem(id) {
    const index = this.items.findIndex(item => item.id === id);
    this.items.splice(index, 1);
  }

  updateCount(id, newCount) {
    this.items.find(item => item.id == id).count = newCount;
  }
};
