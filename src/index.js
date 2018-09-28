document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = "4345abdd-d4d3-46b6-8172-96c96d0c7260" //Enter your assigned uuid here
  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`
  let imageId = 902 //Enter the id from the fetched image here
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`


  // Note: My code has become incredibly sloppy as a result of a bug in my code.
  // I lost about 30 minutes of my time trying to find a bug that prevented
  // me from accessing my objects inside event listeners. Unfortunately, this
  // caused me to have to produce the deliverables in a less-than-desirzble
  // way. While the features work, I don't believe the code below is indicative of my
  // total understanding of JS.

  // As a result, imageMain does not update properly in the DOM; however, the
  // HTML and backend is properly updated. I've left in imageMain to reflect, in some cases,
  // how it would work if I could access them.



  fetch(imageURL)
  .then(response => response.json())
  .then(data => {
    const imageMain = new Image(data)
    imageMain.render()
    // due to the rendering method I chose, a delete button wouldn't appear
    // on the first page refresh, so I've forgone the bonus

    const commentForm = document.getElementById("comment_form")
    commentForm.addEventListener('submit',function() {
      event.preventDefault()
      const commentInput = document.getElementById("comment_input").value
      // This should really be refactored into an adapter class, but I'm
      // running out of time
      // I'm also rendering pessimistically because of this same bug
      fetch("https://randopic.herokuapp.com/comments", {
        method: "POST",
        headers: {
          'accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image_id: 902,
          content: commentInput
        })
      })
      .then(response => response.json())
      .then(data => {

        const newComment = new Comment(data)
        imageMain.comments.push(newComment)
        const commentUl = document.getElementById("comments")
        commentUl.innerHTML += newComment.render()

      })


      // HERE
    })

    const likeBtn = document.getElementById("like_button")
    likeBtn.addEventListener('click', function(){
      let likeCounter = document.getElementById("likes")
      likeCounter.innerText = parseInt(likeCounter.innerText) + 1
      // if I had access to my imageMain, I would also increment its like counter
      let image = fetch("https://randopic.herokuapp.com/images/4345abdd-d4d3-46b6-8172-96c96d0c7260")
      .then(response => response.json())
      .then(data => {
        data.like_count += 1
        fetch("https://randopic.herokuapp.com/likes",{
          method: "POST",
          headers: {
            'accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            image_id: 902
          })
        })
      })


    })





  })


})
