let commentArray = []

class Comment {
  constructor(commentObj){
    this.comment = commentObj.comment
    this.id = commentObj.id
    commentArray.push(this)
  }


  static findById(givenId){
    return commentArray.find(function(comment){
      return comment.id == givenId
      
    })


  }

}
