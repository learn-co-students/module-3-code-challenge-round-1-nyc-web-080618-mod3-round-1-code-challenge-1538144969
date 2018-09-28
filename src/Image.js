class Image {

  constructor(imgObj) {
    this.id = imgObj.id,
    this.url = imgObj.url,
    this.name = imgObj.name
    Image.all.push(this)
  }

  renderImage() {
    return `${this.url}`
  }


}
Image.all = [];
