document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = 'd2d9c599-0dd1-488e-b0af-f68db7d9af8cs'

  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`

  let imageId = 904

  const imagePlace = document.getElementById("imagePlace")
  const commentPlace = document.getElementById('comment_form')

  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`

  fetch('https://randopic.herokuapp.com/images/d2d9c599-0dd1-488e-b0af-f68db7d9af8c')
  .then(res => res.json())
  .then(imgTarget => {
    const img = new Image(imgTarget)
    imagePlace.innerHTML = img.render()
  })

  document.addEventListener("click", (event) => {
    if(event.target.id === "like_button"){
      const likeNumber = document.getElementById("targetLikes")
      let likeInner = likeNumber.innerText
      const targetId = event.target.dataset.id
      const target = Image.find(targetId)
      let addLike = Number(likeInner) + 1
      likeNumber.innerText = addLike

      fetch('https://randopic.herokuapp.com/images/d2d9c599-0dd1-488e-b0af-f68db7d9af8c', {
        method: "PATCH",
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        },
        body: JSON.stringify({
          like_count: addLike
        })
      })
    }

  })

  commentPlace.addEventListener("submit", (event) => {
    event.preventDefault();
    const input = document.getElementById('comment_input').value
    const commentUl = document.getElementById('comment')
    const targetId = event.target.dataset.id
    const target = Image.find(targetId)
    let newComment = new Comment(input)
    commentUl.innerHTML = newComment.renderComment()

    fetch('https://randopic.herokuapp.com/images/d2d9c599-0dd1-488e-b0af-f68db7d9af8c', {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify({
        comments: input
      })
    })
  })



})
