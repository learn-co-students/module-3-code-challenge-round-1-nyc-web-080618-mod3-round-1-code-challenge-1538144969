// add constructor function to class that is required when calling new Comment & pass in the JSON object
class Comment {
  constructor(commentJsonObject){
    this.comments = commentJsonObject.comments
    this.id = commentJsonObject.id
    this.like_count = commentJsonObject.like_count
    this.name = commentJsonObject.name
    this.url = commentJsonObject.url
    this.uuid = commentJsonObject.uuid
    allComments.push(this)
  }

// render the image
  renderImageContent(){
    return(`
      <img id="image" data-id=${this.id} src=${this.url}>
      `)
  }

// render the name
  renderNameContent(){
    return(`
      <h4>${this.name}</h4>
      `)
  }

// map through to get comments


// render the comments
  renderCommentContent(){
    return (`
      <li>${this.comments}</li>
      `)
  }

// render the like counter increase
    renderLikes(){
      return (`
        ${this.like_count}
        `)
    }

} // end of comment class

const allComments = []
