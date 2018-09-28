document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = 'ca8cbae6-bedc-45f0-ae36-6db604b25065'

  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`

  let imageId = 1 //Enter the id from the fetched image here
  let image;

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageDisplay = document.getElementById('image')
  const imageName = document.getElementById('name')
  const likesDisplay = document.getElementById('likes')
  const likeButton = document.getElementById('like_button')
  const commentsDisplay = document.getElementById('comments')
  const commentsForm = document.getElementById('comment_form')

  Adapter.getImage(imageURL).then( imageData => {
    imageId = imageData.id
    image = new Image(imageData)
    imageDisplay.src = image.url
    imageName.innerText = image.name
    likesDisplay.innerText = image.like_count
    image.comments.forEach(comment => {
      commentsDisplay.innerHTML += `<li id="comment-${comment.id}">${comment.content}
      <button id="delete-comment-${comment.id}" class='delete btn btn-danger'>Delete</button></li>`
    })
  }) // Adapter getImage

  likeButton.addEventListener('click', event => {
    const imageLikes = image.like_count + 1
    likesDisplay.innerText = imageLikes
    Adapter.likeImage(image).then( imageData => {
      image.like_count++
    })
  }) // likeButton AEL click

  commentsForm.addEventListener('submit', event => {
    event.preventDefault()
    const userComment = event.target.querySelector('#comment_input').value
    if(userComment !== ''){
      commentsDisplay.innerHTML += `<li id="new-comment">${userComment}</li>`
      Adapter.commentOnImage(image, userComment).then( userComment => {
        let newComment = document.getElementById('new-comment')
        newComment.id = `comment-${userComment.id}`
        newComment.innerHTML += `<button id="delete-comment-${userComment.id}" class='delete btn btn-danger'>Delete</button>`
      })
      event.target.reset()
    } else {
      alert('You must fill out the comment input')
    }
  }) // commentsForm AEL submit

  commentsDisplay.addEventListener('click', event => {
    if(event.target.className === 'delete btn btn-danger'){
      const commentId = event.target.id.split('-')[2]
      document.getElementById(`comment-${commentId}`).remove()
      Adapter.deleteComment(commentId).then(console.log)
    }
  })

  const selfDestructButton = document.getElementById('self-destruct')
  selfDestructButton.addEventListener('click', event => {
    if(selfDestructButton.innerText === 'Implode The Page'){
      selfDestructButton.innerText = 'Are You Sure?'
    } else if(selfDestructButton.innerText === 'Are You Sure?'){
      selfDestructButton.innerText = 'Not Kidding Here'
    } else if(selfDestructButton.innerText === 'Not Kidding Here'){
      document.body.innerHTML = ""
      document.body.innerHTML =
      `<h1 class="text-center display-1">Just Remember You did this to yourself.</h1>
      <h3 class="text-center">RIP</h3>
      `
      setTimeout( () => {
        window.close()
      }, 3000)
    }
  })
})
