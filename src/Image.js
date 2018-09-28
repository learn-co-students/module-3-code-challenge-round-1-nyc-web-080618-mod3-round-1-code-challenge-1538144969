class Image {
  constructor(imageObj){
    this.id = imageObj.id
    this.name = imageObj.name
    this.like_count = imageObj.like_count
    this.url = imageObj.url
    if(imageObj.comments.length === 0){
      this.comments = []
    }
    this.comments = imageObj.comments
  }
}
