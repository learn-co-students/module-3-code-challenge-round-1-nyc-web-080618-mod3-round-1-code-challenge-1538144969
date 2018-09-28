document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = '5bd6b5f6-c5c9-4615-85ee-c584cf4d02c1' //Enter your assigned uuid here

  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`

  let imageId = 898 //Enter the id from the fetched image here

  const likeURL = `https://randopic.herokuapp.com/likes/`

  const commentsURL = `https://randopic.herokuapp.com/comments/`

  const imageCard=document.getElementById('image_card')

  let newImage

  fetch(imageURL).then(res=>res.json())
  .then(data=>{
    newImage=new Image(data)
    imageCard.innerHTML=newImage.render()
  })


  imageCard.addEventListener('click',e=>{
    e.preventDefault()
  if (e.target.tagName=="BUTTON") {
    fetch('https://randopic.herokuapp.com/likes',{
      method:"POST",
      headers:{
        'Accept':'application/json',
        'Content-Type':'application/json'
      },
      body:JSON.stringify({image_id:imageId})
    }).then(res=>res.json())
    .then(data=>{
      newImage.likes+=1
      imageCard.innerHTML=newImage.render()
    })
  }// end of like

  if (e.target.value==="Submit") {
    const comment=document.getElementById('comment_input').value
    fetch(`https://randopic.herokuapp.com/comments`,{
             method:"POST",
             headers:{
               'Accept':'application/json',
               'Content-Type':'application/json'
             },
             body:JSON.stringify({image_id:imageId,content:comment})
           }).then(res=>res.json())
           .then(data=>{
             newImage.comments.push(data)
             imageCard.innerHTML=newImage.render()
           })
    }//end of comment

  if (e.target.className=="delete") {
    const comment_id=e.target.dataset.id
         fetch(`https://randopic.herokuapp.com/comments/${comment_id}`,{
          method:"DELETE"}).then(res=>res.json())
          .then(data=>{
            console.log(data);
            newImage.comments=newImage.comments.filter(comment=>comment.id!=comment_id)
            imageCard.innerHTML=newImage.render()
          })
  }
  })



})
