allComments = [];
class Comment {
  constructor(commentObj){
    this.id = commentObj.id;
    this.content = commentObj.content;
    this.image_id = commentObj.image_id;
    allComments.push(this);
  }
  render(){
    return `
      <p id=comment-${this.id}>${this.content}  <button class="delete-btn" data-id=${this.id}>Delete</button></p>
    `
  }
}
