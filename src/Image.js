const Image = (()=> {
  const allImages = []
  return class{
    constructor(imageJSON){
      this.id = imageJSON.id
      this.url = imageJSON.url
      this.name = imageJSON.name
      this.like_count= imageJSON.like_count
      this.comments = imageJSON.comments
      allImages.push(this);
    }

    static findById(imageId){
      return allImages.find(image=> image.id ==imageId)
    }

    renderDetail(){


       return  (`
         <div id="image_card" class="card col-md-4">
         <img id="image" data-id="${this.id}" src= "${this.url}">
         <h4 id="name">${this.name}</h4>
         <span>Likes:
         <span id="likes">${this.like_count}</span>
         </span>
         <button id="like_button" data-likeId = "${this.id}">Like</button>
         <form id="comment_form">
         <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
         <input type="submit" value="Submit"/>
         </form>
         <ul id="comments">
            ${this.comments.map(comment=> `<li>${comment.content}</li>`).join('')}
         </ul>
         </div>
         `)
     }




  }


})()
