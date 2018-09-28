document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = `06cb003f-7690-4850-8b84-c6330e274301` //Enter your assigned uuid here
  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`
  let imageId = 900 //Enter the id from the fetched image here
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
/////////////////////////////////////////////////////////////////////////
  const imageContainer = document.getElementById("image_content")
  console.log(imageContainer)

  //fetch image info

  fetch('https://randopic.herokuapp.com/images/06cb003f-7690-4850-8b84-c6330e274301')
    .then((response) => {
      return response.json()
    })
    .then((imgJsonObj) => {
      const myImage = new Image(imgJsonObj)
        imgJsonObj.url = myImage.url
        imageContainer.innerHTML += myImage.renderImage()
       })
    })

      //post comments//
      const commentFormContainer = document.getElementById("comment_form")
      console.log(commentFormContainer)

      commentFormContainer.addEventListener("submit", function(event) {
        event.preventDefault()

        const userInput = document.getElementById("comment_input").value

         fetch('https://randopic.herokuapp.com/images/06cb003f-7690-4850-8b84-c6330e274301', {
           method: "POST",
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
           },
           body: JSON.stringify({
             content: userInput
           })
         }).then((response) => {
           return response.json()

         }).then((commentJsonObj) => {
           console.log(commentJsonObj)
           commentJsonObj.forEach((comment) => {
             const newComment = new Comment(commentJsonObj)
             commentFormContainer.innerHTML += newComment.postComment()
           })
         })




})
