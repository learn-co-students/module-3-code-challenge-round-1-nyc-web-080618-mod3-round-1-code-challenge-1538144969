class Image {
  constructor(obj) {
    this.id = obj.id
    this.comments = obj.comments
    this.like_count = obj.like_count
    this.name = obj.name
    this.url = obj.url
    this.uuid = obj.uuid
  }
  render() {
    const imgTag = document.getElementById("image")
    imgTag.src = this.url
    const headerTag = document.getElementById("name")
    headerTag.innerText = this.name
    const likesTag = document.getElementById("likes")
    likesTag.innerText = this.like_count
    const commentUl = document.getElementById("comments")
    const comments = this.comments
    for(const comment of comments){
      const li = document.createElement('li')
      li.innerText = comment.content
      commentUl.appendChild(li)
    }

  }

}
