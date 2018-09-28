document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = '75a1062e-78ea-482c-83dd-0736c2f44019'

  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`

  let imageId = 1 //Enter the id from the fetched image here

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch('https://randopic.herokuapp.com/images/:uuid')
  .then(response => response.json())
  .then(imageData => {
    const imageURL =imageData.url
    const grabImage = document.getElementById('image_card')
    // const getImage = grabImage.getElementById('image')

    grabImage.innerHTML = `
    <img id="image"src="http://blog.flatironschool.com/wp-content/uploads/2017/06/IMAG2936-352x200.jpg" />
    <h4 id="name"></h4>
    <span>Likes:
      <span id="likes">0</span>
    </span>
    <button id="like_button">Like</button>
    <form id="comment_form">
      <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
      <input type="submit" value="Submit"/>
    </form>
    <ul id="comments">

    </ul>
    </div>`
  })

  const commentBox = document.getElementById('submit')
   commentBox.addEventListener('click',function(event){
     console.log(event)
     if(event.target.id == "submit" ){
       const commentArea = document.querySelector('comment_input').value
       const commentId = event.target.dataset.id
       const commentSubmit = Comment.findById(commentId)
       commentId.comment = commentArea
       fetch(`https://randopic.herokuapp.com/comments/${commentObj.id}`,{
         method: 'PATCH',
         headers: {
           'accept': 'application/json',
           'Content-Type': 'application/json'
         },
         body: JSON.stringify(commentSubmit)
       })


     }
   })







})
