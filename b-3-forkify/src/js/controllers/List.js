/**
 * ListController
 */

import ListModel from '../models/List';
import ListView from '../views/List';

import { common, components, elements, namesInDOM } from '../views/base';

export default state => new class ListController {
  constructor() {
    this.init();
  }

  init = () => {
    // Init ListView
    this.view = ListView(components, elements, namesInDOM);

    // Add listeners
    elements.shoppingList.main
    .addEventListener('click', event => {
      const id = event.target.closest('.shopping__item').dataset.itemid;

      if (event.target.matches('.shopping__delete, .shopping__delete *')) {
        // Delete item from model
        state.list.deleteItem(id);

        // Delete from UI
        this.view.deleteItem(id);
      } else if (event.target.matches('.shopping__count-value')) {
        // Update model count for that item
        const value = parseFloat(event.target.value, 10);
        state.list.updateCount(id, value);
      }
    });

    elements.recipe.main
      .addEventListener('click', event => {
        if (event.target.matches('.recipe__btn--add, .recipe__btn--add *')) {
          this.controlList();
        }
      });

    // Init ListModel
    state.list = ListModel;
  }

  controlList = () => {
    // Add each ingredient to the list and UI
    if (state.list.item.length === 0) {
      state.recipe.ingredients.forEach(element => {
        const item = state.list.addItem(element.count, element.unit, element.ingredient);
        this.view.renderItem(item);
      });
    }
  }
};
