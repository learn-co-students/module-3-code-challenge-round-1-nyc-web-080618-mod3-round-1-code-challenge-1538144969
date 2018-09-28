const allComments = []

class Comment {
  static renderAll() {
    return allComments.map(comment => {
      return comment.render()
    }).join('')
  }

  static getAllComments() {
    return allComments
  }

  constructor(commentObj) {
    this.id = commentObj.id
    this.content = commentObj.content
    allComments.push(this)
  }

  render() {
    return `
      <br>
      <li>${this.content}   <button data-id="${this.id}">Delete</button></li>
      <br>
    `
  }
}
