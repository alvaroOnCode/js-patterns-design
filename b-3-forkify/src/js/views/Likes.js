/**
 * LikesView
 */

import SearchView from '../views/Search';

export default (components, elements) => new class LikesView {
    constructor() {}

    toggleLikeBtn = isLiked => {
      const iconString = isLiked ? 'icon-heart' : 'icon-heart-outlined';
      document.querySelector('.recipe__love use').setAttribute('href', `img/icons.svg#${iconString}`)
    }

    toggleLikeMenu = numLikes => {
        elements.likes.menu.style.visibility = numLikes > 0 ? 'visible' : 'hidden';
    }
  
    renderLike = item => {
      /**
       * - Warning! -
       * Another SearchView instance should not be needed 😥
       */

      const shortTitle = SearchView(components, elements).limitRecipeTitle(item.title, 10);
      elements.likes.list.insertAdjacentHTML('beforeend', components.likesListItem(item, shortTitle));
    }
  
    deleteLike = id => {
      const el = document.querySelector(`.likes__link[href*="#${id}"]`).parentElement;
      
      if (el) {
        el.parentElement.removeChild(el);
      }
    }
  };
  