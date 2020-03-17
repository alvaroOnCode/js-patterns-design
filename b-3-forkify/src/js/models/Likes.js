/**
 * LikesModel
 */

export default new class LikesModel {
  constructor() {
    this.likes = [];
  }

  addLike(id, title, publisher, img) {
    const like = { id, title, publisher, img };
    this.likes.push(like);

    // Persist data in LocalStorage
    this.persistData();

    return like;
  }

  deleteLike(id) {
    const index = this.likes.findIndex(item => item.id === id);
    this.likes.splice(index, 1);

    // Persist data in LocalStorage
    this.persistData();
  }

  isLiked = id => {
    return this.likes.findIndex(item => item.id === id) !== -1;
  }

  getTotalLikes() {
    return this.likes.length;
  }

  persistData() {
    localStorage.setItem('likes', JSON.stringify(this.likes));
  }

  readLocalStorage() {
    const storedLikes = JSON.parse(localStorage.getItem('likes'));

    // Restore likes from localStorage if any
    if (storedLikes) {
      this.likes = storedLikes;
    }
  }
};
