class Image {
  constructor(image){
    this.id = image.id
    this.url = image.url
    this.name = image.name
    this.like_count = image.like_count
    this.comments = image.comments
    Image.all.push(this)
  }

  renderImage(){
    return `<div id="image_card" class="card col-md-4">
          <img src="${this.url}" data-id/>
          <h4 id="${this.name}"></h4>
          <span>Likes:
            <span id="likes">${this.like_count}</span>
          </span>
      </div>`
  }


  renderComments(){
    var emptyString = ""
    this.comments.forEach(function(comment){
      emptyString += comment.content + "<p>"
    })
    return emptyString

  }

} // end of image class


// given that it's only one image, I don't think this is actually necessary
Image.all = []
