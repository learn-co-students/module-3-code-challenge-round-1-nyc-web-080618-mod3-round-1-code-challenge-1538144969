class Image {

  static find(id){
    return Image.all.find((image) => image.id == id);
  }

  constructor(imageObj){
    this.id = imageObj.id;
    this.url = imageObj.url;
    this.name = imageObj.name;
    this.like_count = 0;
    this.comments = imageObj.comments;
    Image.all.push(this);
  }

  render(){
    return `
    <img src="${this.url}" id="image" data-id-${this.id}>
    <h4 id="name">${this.name}</h4>
    <span>Likes:
      <span id="targetLikes">${this.like_count}</span>
    </span>
    <button id="like_button" data-id="${this.id}">Like</button>
    `
  }

}

Image.all = []
