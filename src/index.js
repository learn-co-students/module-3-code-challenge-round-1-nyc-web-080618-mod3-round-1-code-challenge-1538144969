const img = document.getElementById('image')
const imgLikes = document.getElementById('likes')
const imgName = document.getElementById('name')
const imgComments = document.getElementById('comments')
const commentForm = document.getElementById('comment_form')

document.addEventListener('click', (e) => {
  if (e.target.id === 'like_button') {
    imgClassObj.like_count += 1
    imgLikes.innerText = imgClassObj.like_count
    fetch(`https://randopic.herokuapp.com/likes`, {
      method: 'POST',
      headers: {
        'Accept': "application/json",
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: imgClassObj.id,
        like_count: imgClassObj.like_count
      })
    })
  } else if (e.target.tagName === 'INPUT' && e.target.type === 'submit') {
    let userInput = commentForm.comment_input.value
    if (userInput !== '') {
      fetch(`https://randopic.herokuapp.com/comments`, {
        method: 'POST',
        headers: {
          'Accept': "application/json",
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image_id: imgClassObj.id,
          content: userInput
        })
      })
    }
  } else if (e.target.id === 'delete_comment') {
    fetch(`https://randopic.herokuapp.com/comments/${e.target.dataset.id}`, {
      method: 'DELETE'
    })
    e.target.parentNode.remove()
  }
})

document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = 'c258b069-5765-4241-9a7f-1c5a542a9c85' //Enter your assigned uuid here

  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`

  let imageId = 1 //Enter the id from the fetched image here

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch('https://randopic.herokuapp.com/images/c258b069-5765-4241-9a7f-1c5a542a9c85')
    .then(res => res.json()).then(data => {
      let imgObj = new Image(data)
      img.src = imgObj.url
      imgLikes.innerText = imgObj.like_count
      imgName.innerText = imgObj.name
      imgObj.comments.forEach(comment => {
        let comObj = new Comment(comment)
        imgComments.innerHTML += comObj.render()
      })
    })
})
