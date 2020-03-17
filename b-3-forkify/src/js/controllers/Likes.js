/**
 * LikesController
 */

import LikesModel from '../models/Likes';
import LikesView from '../views/Likes';

import { components, elements } from '../views/base';

export default state => new class LikesController {
  constructor() {
    this.init();
  }

  init = () => {
    // Init LikesModel
    state.likes = LikesModel;

    // Init LikesView
    this.view = LikesView(components, elements);

    // Add listeners
    elements.recipe.main
      .addEventListener('click', event => {
        if (event.target.matches('.recipe__love, .recipe__love *')) {
          this.controlLike();
        }
      });
    
    // Set Likes menu visibility
    this.view.toggleLikeMenu(state.likes.getTotalLikes());
  }

  controlLike() {
    const currentId = state.recipe.id;

    // User has not liked recipe yet
    if (!state.likes.isLiked(currentId)) {
      // Add like to the model
      const newLike = state.likes.addLike(
        currentId,
        state.recipe.title,
        state.recipe.publisher,
        state.recipe.image_url
      );

      // Toggle Like button
      this.view.toggleLikeBtn(true);

      // Add like to UI list
      this.view.renderLike(newLike);

    // User has not liked recipe yet
    } else {
      // Remove like to the model
      state.likes.deleteLike(currentId);

      // Toggle Like button
      this.view.toggleLikeBtn(false);

      // Remove like to UI list
      this.view.deleteLike(currentId);
    }

    this.view.toggleLikeMenu(state.likes.getTotalLikes());
  }
};
