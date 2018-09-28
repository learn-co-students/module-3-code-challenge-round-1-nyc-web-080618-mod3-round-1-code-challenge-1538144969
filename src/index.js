document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = "6b732840-fe67-45bc-9c02-1036fcf59a53" //Enter your assigned uuid here

  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`

  let imageId = 897 //Enter the id from the fetched image here

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageCard = document.getElementById("image_card")
  imageCard.children[0].innerHTML = `<img src"${imageURL}">`

  imageCard.addEventListener("click", (event) => {
    if (event.target.id == "like_button") { // Like button clicked
      // Increment likes on DOM
      let likes = event.target.parentElement.children[2].children[0] // Like HTML element
      likes.innerHTML = parseInt(likes.innerHTML) + 1 // Increment on dom
      const newLikes = parseInt(likes.innerHTML) // New like count as int

      // Update likes in backend
      fetch('https://randopic.herokuapp.com/likes', {
        method: "POST",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          image_id: imageId,
          like_count: newLikes
        })
      })
    } else if (event.target.dataset.id) {
      // Hide comment on DOM
      event.target.parentElement.remove()
      const targetId = event.target.dataset.id

      fetch(`https://randopic.herokuapp.com/comments/${targetId}`, {
        method: "DELETE"
      })
      console.log(event.target.dataset.id);
      // debugger
    } // end if
  }) // end like event listener

  imageCard.addEventListener("submit", (event) => {
    event.preventDefault()

    const newComment = event.target.children[0].value
    const commentList = event.target.nextElementSibling

    // Put comment on DOM
    commentList.innerHTML += `<li>${newComment}</li>`
    // Doesn't render with a delete button unless page is refreshed
    // Would change to pessimistic rendering to handle the issue

    // Add comment to backend
    fetch('https://randopic.herokuapp.com/comments', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        image_id: imageId,
        content: newComment
      })
    })

    event.target.reset()
  }) // end comment listener


  // Initial render of image and its data
  fetch(imageURL)
  .then(response => response.json())
  .then(imageData => {
    const imgURL = imageData["url"]
    imageCard.children[0].src = imgURL
    // const newImg = new Image(imageData)
    imageCard.children[2].children[0].innerHTML = imageData["like_count"] // Render likes with proper count

    // Create comment instances for all comments on server
    imageData["comments"].forEach(commentObj => {
      const newComment = new Comment(commentObj)
    })

    // Render all comment instances
    imageCard.children[5].innerHTML = Comment.renderAll()

  })

})
