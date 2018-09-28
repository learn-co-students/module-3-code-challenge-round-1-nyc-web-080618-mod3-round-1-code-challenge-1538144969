document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = '332125cd-5915-4245-8b66-7c582e7109f2' //Enter your assigned uuid here

  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`

  let imageId = 912 //Enter the id from the fetched image here

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageContainer = document.getElementById('image_card');
  const imageName = document.getElementById('name');
  const numberOfLike = document.getElementById('likes')
  const newComment = document.getElementById("comment_input")
  const commentsList = document.getElementById('comments')

  fetch('https://randopic.herokuapp.com/images/332125cd-5915-4245-8b66-7c582e7109f2')
  .then(response => response.json())
  .then(imageData => {
      let newImage = new Image(imageData);
      return imageContainer.innerHTML = newImage.renderInfo();
  })

  imageContainer.addEventListener("click", (event) => {
    if (event.target.id === "like_button"){
      let imageId = event.target.dataset.id;
      let targetImage = allImages.find(image => image.id == imageId);
      targetImage.like_count++;
      fetch('https://randopic.herokuapp.com/likes', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image_id: imageId
        })
      }).then(response => response.json())
      numberOfLike.innerText = targetImage.like_count;
    }
  })

  imageContainer.addEventListener("submit", (event) => {
    if (event.target.id === "comment_form"){
      let imageId = event.target.dataset.id;
      let targetImage = allImages.find(image => image.id == imageId);
      let newComment = document.getElementById("comment_input").value

      fetch(`https://randopic.herokuapp.com/comments/`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          image_id: imageId,
          content: newComment
        })
      }).then(response => response.json())
      commentsList.innerHTML += `<li>newComment</li><br>`
    }
  })

})
