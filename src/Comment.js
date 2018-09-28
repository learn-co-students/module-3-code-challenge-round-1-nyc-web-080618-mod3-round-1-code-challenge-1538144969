
class Comment {

  static find(id){
    return allComment.find((comment) => comment.id == id);
  }


  constructor(commentObj){
    this.commentObj = commentObj.comments
    allComment.push(this)
  }

  renderComment(){
    return `${this.commentObj.map(comment => `<li>${comment.content}</li>`)}`
  }
}

allComment = []
