document.addEventListener('DOMContentLoaded', function() {
  const yourUUID = '59e0685b-ea20-489c-aba6-b649024fbdf3'
  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`
  let imageId = 914
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageContainer = document.getElementById('image_content')
  const imageCard = document.getElementById('image_card')
  const likeButton = document.getElementById('like_button')
  const likeCount = document.getElementById('likes').value

  fetch(`https://randopic.herokuapp.com/images/${yourUUID}`)
  .then(response => response.json())
  .then(imageObj => {
    let newImage = new Image(imageObj)
    imageContainer.innerHTML += newImage.render()
  })

  imageCard.addEventListener('click', (event) =>{
    if(event.target.id === "like_button") {
      likeCount +=1


      fetch(likeURL, {
        method:'POST',
        headers:{
        'Content-Type': 'application/json',
        'Accept': 'application/json'
        },
        body:JSON.stringify({
          image_id:imageId
          like_count:likeCount
        })
      })
    }
  })

})

// Didn't spend enough time studying optimistic rendering,
// spent too much time trying to figure out how
// to increase likes.
