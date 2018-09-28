// document event listener
document.addEventListener('DOMContentLoaded', function() {
// document scope variables
const yourUUID = `ffbc704a-87af-4b7f-adaa-0dc07d3f6bbd`
const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`
let imageId = `https://randopic.herokuapp.com/images/ffbc704a-87af-4b7f-adaa-0dc07d3f6bbd`
const likeURL = `https://randopic.herokuapp.com/likes/`
const commentsURL = `https://randopic.herokuapp.com/comments/`

// document scope variables for creating event listeners
const imageRender = document.getElementById('image')
const nameRender = document.getElementById('name')
const commentRender = document.getElementById('comments')
const likeCounter = document.getElementById('like_button')
const commentSubmission = document.getElementById('comment_input')

// create initial fetch request to the server
  fetch(imageURL)
  .then(response => response.json())
  .then(commentJsonObject => {
// console.log(commentJsonObject) - verify expected content back

// create new Comment Objects from the data passed in
// render the innerHTML of each object to be whats expected from the README
    let newComment = new Comment(commentJsonObject)
    imageRender.innerHTML = newComment.renderImageContent()
    nameRender.innerHTML = newComment.renderNameContent()
    commentRender.innerHTML = newComment.renderCommentContent()
}) // end of .then for fetch


// add an event listener to the like count
  likeCounter.addEventListener('click', (event) => {
// console.log(event.target) - verify click event
// increment the like button
    likeCounter.innerHTML += renderLikeCount()

// once the button has been liked - add a fetch request to update the like count in the API
// declare a variable for our new like amount
    const newLikeCount = document.getElementById('likes').value
      fetch(imageURL, {
        method: 'PATCH',
           headers: {
             'Accept': 'application/json',
             'Content-Type': 'application/json'
             },
           body: JSON.stringify({
 // set the JSON like_count that's being patched to the server equal to variable containing new like value
             like_count: newLikeCount
           }) // end of headers
         }) // end of fetch request
         .then(response => response.json())
         .then(updatedCommentJson => {
 // console.log(updatedCommentJson) - verify expected return
 // render the new like_count
            let newComment = new Comment(updatedCommentJson)
            likeCounter.innerHTML = newComment.likeCounter()
         }) // end of .then statements
}) // end of likeCounter event listener


// add an event listener to the comments submission form
  commentSubmission.addEventListener('submit', (event) => {
console.log(event.target.value);
}) // end of commentSubmission event listener


}) // end of document event listener
