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
    return like;
  }

  deleteLike(id) {
    const index = this.likes.findIndex(item => item.id === id);
    this.likes.splice(index, 1);
  }

  isLiked = id => {
    return this.likes.findIndex(item => item.id === id) !== -1;
  }

  getTotalLikes() {
    return this.likes.length;
  }
};
