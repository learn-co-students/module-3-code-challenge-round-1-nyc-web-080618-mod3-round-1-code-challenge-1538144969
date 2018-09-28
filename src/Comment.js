class Comment {

  constructor(commentObj) {
    this.id = commentObj.id,
    this.content = commentObj.content
    Comment.all.push(this)
  }

  postComment(){
    return `<li>
              ${this.content}
            </li>
            `
  }

}
Comment.all = [];
