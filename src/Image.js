let imgClassObj = new Object

class Image {
  constructor({id,url,name,like_count,uuid,comments}){
    this.id = id
    this.url = url
    this.name = name
    this.like_count = like_count
    this.uuid = uuid
    this.comments = comments
    imgClassObj = this
  }

}
