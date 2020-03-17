/**
 * ListModel
 */

import uniqid from 'uniqid';

export default new class ListModel {
  constructor() {
    this.item = [];
  }

  addItem(count, unit, ing) {
    const item = {
      id: uniqid(),
      count,
      unit,
      ing
    };

    this.item.push(item);

    return item;
  }

  deleteItem(id) {
    const index = this.item.findIndex(item => item.id === id);
    this.item.splice(index, 1);
  }

  updateCount(id, newCount) {
    this.item.find(item => item.id == id).count = newCount;
  }
};
