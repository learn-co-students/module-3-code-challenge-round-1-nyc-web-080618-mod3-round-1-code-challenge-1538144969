document.addEventListener('DOMContentLoaded', function() {

  const yourUUID = '44a7847f-df37-4a45-ba62-286d3fbcbf74' //Enter your assigned uuid here
  const imageURL = `https://randopic.herokuapp.com/images/${yourUUID}`
  let imageId = 920 //Enter the id from the fetched image here
  const likeURL = `https://randopic.herokuapp.com/likes/`
  const commentsURL = `https://randopic.herokuapp.com/comments/`
  const imageDisplay = document.getElementById('image_card')
  const imageContainer = document.getElementById('entire')

  return fetch(`https://randopic.herokuapp.com/images/${yourUUID}`)
  .then((resp)=> resp.json())
  .then(json => ((item) =>
  {
    imageDisplay.innerHTML = `<h1>testing</h1>`
  }))


  // document.addEventListener("click", (event) =>{
  //   console.log(event.target);
  //   fetch(`https://randopic.herokuapp.com/images/${yourUUID}`), {
  //     method: 'PATCH',
  //     headers: {
  //       'Accept': 'application/json',
  //       'Content-Type': 'application/json'
  //     },
  //     body: JSON.stringify(Obj)
  //   }).then(resp => resp.json())
  //   } //end of listener







}) //end of class
