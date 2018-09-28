allImages=[]

class Image {
  constructor(obj){
    this.id = obj.id
    this.url = obj.url
    this.name = obj.name
    this.comments = obj.comments
    this.like_count = obj.like_count
    allImages.push(this)
  }

  render(){
    return (`
      <img src="${this.url}">
      <h4>${this.name}</h4
      `)
    }




}
