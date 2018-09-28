
  image_store = []

class Image {
  constructor(imageObj){
    this.name = imageObj.name
    this.url = imageObj.url
    this.like_count = imageObj.like_count
    this.comments = imageObj.comments
    image_store.push(this)

  }

  render(){
    return (`<img id="image" src = ${this.url} data-id =${this.id}>

    <h4 id="name">Name: ${this.name}</h4>
    <span>Likes:
      <span id="likes" data-pic-id = ${this.id}>${this.like_count}</span>
    </span>
    <button id="like_button">Like</button>
    <form id="comment_form">
      <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
      <input type="submit" value="Submit"/>
    </form>
    <ul id="comments">
      ${this.renderComments()}
    </ul>
  `)
  }




  renderComments(){
    return this.comments.map((comment)=>{

      return(`
        <li data-comment-id = ${comment.id}>${comment.content} <button class="delete-button">Delete</button></li>
        `)
    }).join("")


  }

}
