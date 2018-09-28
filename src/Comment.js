class Comment {
  constructor(obj){
    this.id = obj.id
    this.content = obj.content
    this.image_id = obj.image_id
  }
  render() {
    return (
      `
      <li id="${this.id}">${this.content}</li>
      `
    )
  }
}
