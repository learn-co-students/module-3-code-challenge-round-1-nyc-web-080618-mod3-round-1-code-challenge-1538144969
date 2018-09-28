class Image {
  constructor(image){
    this.id = image.id;
    this.url = image.url;
    this.name = image.name;
    this.like_count = image.like_count;
    this.comments = image.comments;
    allImages.push(this)
  }

  renderInfo(){
    let comments = this.comments.map(comment => comment.content).join(" ")
    return `<img id="image" data-id=${this.id} src=${this.url}>
    <h4 id="name">${this.name}</h4>
    <span>Likes:
      <span id="likes">${this.like_count}</span>
    </span>
    <button id="like_button" data-id=${this.id}>Like</button>
    <form id="comment_form" data-id=${this.id}>
      <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
      <input type="submit" value="Submit"/>
    </form>
    <ul id="comments">
      <li>${comments}</li><br>
    </ul>`
  }
}

allImages = [];
