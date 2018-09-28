document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = "fdc8ff71-b259-4a68-92a0-523b4bf9094d"//Enter your assigned uuid here

  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`

  let imageId = 1 //Enter the id from the fetched image here

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

const imageDiv= document.getElementById('image_card')
const likeButton = document.getElementById('like_button')
const likeCount = document.getElementById('likes')
// get all info
fetch('https://randopic.herokuapp.com/images/fdc8ff71-b259-4a68-92a0-523b4bf9094d')
  .then(res => res.json())
  .then(resJson => {


      const newImage = new Image(resJson)

   imageDiv.innerHTML = newImage.renderDetail()
 }) // end of all info
  // like button

   document.addEventListener('click', e=> {

     e.preventDefault()

    if (e.target.id === "like_button"){
    const  imageId = parseInt(e.target.dataset.likeid)
    const  targetImage = Image.findById(imageId)
    let likeValue = parseInt(likeCount.innerText)
    likeValue = likeValue +1
    likeCount.innerText = `${likeValue}`
   fetch('https://randopic.herokuapp.com/likes', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body:JSON.stringify({

          "id": 112,
        "image_id": 8,
        "created_at": "2017-11-17T13:52:22.167Z",
       "updated_at": "2017-11-17T13:52:22.167Z"
        })
      }).then(res=> res.json())
        .then (resJson => {
          debugger
           targetImage.comments.push(resJson)

           imageDiv.innerHTML = targetImage.renderDetail()
        })
    } else {
      if (e.target.type  === 'submit'){
        let CommentInput = event.target.querySelector('#comment_input').value
        fetch('https://randopic.herokuapp.com/comments'),
        {method: 'POST',
        
        headers: {
          "Accept": 'application/json',
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          {
    "id": 2,
    "content": "first comment!",
    "created_at": "2017-09-27T18:18:05.623Z",
    "updated_at": "2017-09-27T18:18:05.623Z"
    }
        })
      }
    }
   })

})
