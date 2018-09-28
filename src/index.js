document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = "bf3b9b13-ea35-4b6d-aa88-23838d89ebc8"
  //console.log(yourUUID)

  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`

  let imageId = 1 //Enter the id from the fetched image here

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`




  const imageLocationOnPage = document.getElementById('image_card')
  const commentLocationOnPage = document.getElementById('comments')


  Adapter.getImage()
  .then(function(image){
    var imageObject = new Image(image)
    // imageLocationOnPage.innerHTML = `<img src="${imageObject.url}" id="image" data-id="${imageObject.id}">`
    imageLocationOnPage.innerHTML = imageObject.renderImage()
    commentLocationOnPage.innerHTML = imageObject.renderComments()
  })






})
