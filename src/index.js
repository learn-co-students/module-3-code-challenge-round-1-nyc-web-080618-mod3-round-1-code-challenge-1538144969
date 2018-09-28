document.addEventListener('DOMContentLoaded', () => {

  const yourUUID = "67d91e95-ccc3-4ba3-86ab-48c3ceefcf24" //Enter your assigned uuid here

  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`

  let imageId = 908 //Enter the id from the fetched image here

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

//////////////////////////
  const image_tag = document.getElementById("image")
  const image_card = document.getElementById("image_card")


//initial fetch request
  fetch(imageURL)
  .then(response=> response.json())
  .then(data =>{
    //console.log(data)
    let new_image_obj = new Image(data)
    //console.log(new_image_obj)
    //image_tag.src = new_image_obj.url
    image_card.innerHTML = new_image_obj.render()

    //form listeners
    const comment_form = document.getElementById("comment_form")
    comment_form.addEventListener("submit", add_comment)





  })

  document.addEventListener("click", add_like)

  function add_like(){
    if(event.target.id === "like_button"){
    //increase like_count in html
    let current_likes_element = document.getElementById("likes")
    let current_likes_count = parseInt(current_likes_element.innerText)
    current_likes_count +=1
    current_likes_element.innerText = current_likes_count

    ///post request to update the like count in the back end

    fetch('https://randopic.herokuapp.com/likes',
    {method: "POST",
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: 908
    })
    }//end options
  )//end fetch
  // .then(response => response.json())
  // .then(data => {
  //   console.log(data)
  // })

//////implement the delete function
} else if(event.target.className === "delete-button"){

  let commentToBeDeletedId = parseInt(event.target.parentElement.dataset.commentId)
  console.log(commentToBeDeletedId)

  //optimistically render
  event.target.parentElement.remove()

  //delete in the back end

  fetch(`https://randopic.herokuapp.com/comments/${commentToBeDeletedId}`,
    {
      method: "DELETE"
    })//end fetch
  // .then(response=> response.json())
  // .then(data=>{
  //   console.log(data);
  // })
}

}//end like function

  /////comments
  function add_comment(){
    event.preventDefault()

    ///now render optimistically to the page
    let user_comment = document.getElementById("comment_input").value
    let new_comment_element = document.createElement("li")
    new_comment_element.innerText = user_comment

    let comments_ul = document.getElementById("comments")
    comments_ul.appendChild(new_comment_element)

    event.target.reset()

          //if you delete a comment before it is persisted to the database




    //now send the request to the backend

    fetch('https://randopic.herokuapp.com/comments',
    {method: "POST",
    headers:{
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      image_id: 908,
      content: user_comment
    })
    }//end options
    )//end fetch
    // .then(response => response.json())
    // .then(data => {
    //   //console.log(data)
    //   //new_comment_obj = new Comment(data)
    //   //console.log(new_comment_obj)
    // })//end then


  }//end add comment function







}) //end
