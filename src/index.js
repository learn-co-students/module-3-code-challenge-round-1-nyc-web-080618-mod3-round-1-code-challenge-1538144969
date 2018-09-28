document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = "63c0e094-0de8-4e98-97f4-45c15ac218dc"

  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`

  let imageId = 906

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageTag = document.querySelector("#image")
  const nameTag = document.querySelector("#name")
  const likeTag = document.querySelector("#likes")
  const commentsUl = document.querySelector("#comments")
  const likeBtn = document.querySelector("#like_button")
  const commentForm = document.querySelector("#comment_form")
  const commentInput = document.querySelector("#comment_input")

  fetch(`https://randopic.herokuapp.com/images/${yourUUID}`)
  .then(r => r.json())
  .then(data => {
    imageTag.src = data.url;
    nameTag.innerText = data.name;
    likeTag.innerText = data.like_count;
    commentsUl.innerHTML = data.comments.map(comment => {
      let newComment = new Comment(comment);
      return newComment.render();
    }).join("")
  })

  likeBtn.addEventListener("click", (e) => {
    let updatedLikes = likeTag.innerText++
    fetch(likeURL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        image_id: imageId
      })
    })
    .then(r => r.json())
    .then(data => console.log(data))
  })

  commentForm.addEventListener("submit", (e) => {
    e.preventDefault();
    commentsUl.innerHTML += `<p id=comment-${this.id}>${commentInput.value} <button class="delete-btn" data-id="">Delete</button> </p>`

    fetch(commentsURL, {
      method: "POST",
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json"
      },
        body: JSON.stringify({
        image_id: imageId,
        content: commentInput.value
      })
    })
    .then(r => r.json())
    .then(data => {
      let Btns = commentsUl.querySelectorAll("BUTTON")
      let lastBtn = Btns[Btns.length - 1]
      lastBtn.dataset.id = data.id
    })
    e.target.reset();
  })

  document.addEventListener("click", (e) =>{
    if (e.target.className === "delete-btn") {
      let commentId = e.target.dataset.id
      let targetComment = document.querySelector(`#comment-${commentId}`)
      targetComment.remove();
      fetch(`https://randopic.herokuapp.com/comments/${commentId}`, {
        method: "DELETE"
      }).then(r => r.json())
      .then(data => console.log(data))
    }
  })
})
