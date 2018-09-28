document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = '0acf30dd-75a6-4d19-925f-f075cc46985f'
 //Enter your assigned uuid here

  // const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`
  const imageURL = `https://randopic.herokuapp.com/images/0acf30dd-75a6-4d19-925f-f075cc46985f`

  let imageId = 901 //Enter the id from the fetched image here

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`
  let likesCounter = 0


fetch('https://randopic.herokuapp.com/images/0acf30dd-75a6-4d19-925f-f075cc46985f')
.then(r => r.json())
.then(data =>{
  let allComment = []
 let x =  document.getElementById('image_card')
// console.log(data.like_count)

 x.innerHTML = `<img src= ${data.url} id="image" data-id/>
 <h4 id=${data.name}></h4>
 <span>Likes:
  <span id="likes">${data.like_count}</span>
</span>
<button id="like_button">Like</button>
<form id="comment_form">
  <input id="comment_input" type="text" name="comment" placeholder="Add Comment"/>
  <input id ='submitBtn' type="submit" value="Submit"/>
</form>
<ul id="comments">
<li>${data.comments[0].content}</li>
</ul>`

    let likeBtn = document.getElementById('like_button')
  likeBtn.addEventListener('click', function(event){
    event.preventDefault()
    likesCounter ++
    document.getElementById('likes').innerText = data.like_count
    document.getElementById('likes').innerText = data.like_count + likesCounter



    fetch("https://randopic.herokuapp.com/likes",{
        method:"POST",
        headers:{
          "Accept":"application/json",
          "Content-Type":"application/json"
        },
        body:JSON.stringify({image_id: imageId })
      }).then(response=>response.json())
       .then(data=>console.log(data))


  })
  let commentList = document.getElementById('comments')
  let submitBtn = document.getElementById('submitBtn')
  submitBtn.addEventListener('click', function(event){
    event.preventDefault()
    let commentInput = document.getElementById('comment_input')
    // console.log(commentInput)
    let newLi = document.createElement('li')
    newLi.innerText = commentInput.value
    let input = commentInput.value
    commentList.append(newLi)
    fetch(commentsURL),{
      method:"PATCH",
      headers:{
      "Accept":"application/json",
      "Content-Type":"application/json"
    },
    body:JSON.stringify({image_id: imageId,
      content: input})
  }
    document.getElementById('comment_form').reset()


  })
})
})
