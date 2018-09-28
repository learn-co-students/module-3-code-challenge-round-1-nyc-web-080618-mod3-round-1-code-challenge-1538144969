const Image=(()=>{
   const list=[]
   return class  {
     constructor(obj) {
       this.id=obj.id
       this.url=obj.url
       this.name=obj.name
       this.comments=obj.comments
       this.likes=obj.like_count
       list.push(this)
     }

     render(){
       const comments=this.comments.map(comment=>{
       return `<li>${comment.content}<button class="delete" data-id="${comment.id}">DELETE</button></li>` }).join("")

       return `<img src="${this.url}" id="image" data-id="${this.id}">
       <h4 id="name">${this.name}</h4>
       <span>Likes:
         <span id="likes">${this.likes}</span>
       </span>
       <button id="like_button">Like</button>
       <form id="comment_form">
         <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
         <input type="submit" value="Submit"/>
       </form>
       <ul id="comments">
         ${comments}
       </ul>
       `
     }



   }
}
)()
