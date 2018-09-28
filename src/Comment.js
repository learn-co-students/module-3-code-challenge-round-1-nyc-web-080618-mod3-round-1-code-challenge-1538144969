const allComments = []

class Comment {
  constructor({id,content,created_at,updated_at}){
    this.id = id
    this.content = content
    this.created_at = created_at
    this.updated_at = updated_at
    allComments.push(this)
  }

  render(){
    return `<li>${this.content}  <button id='delete_comment' data-id='${this.id}'>Delete</button></li>`
  }

}
