class Adapter {
  static getImage(url){
    return fetch(url).then(res => res.json())
  }

  static likeImage(image){
    console.log(image);
    return fetch(`https://randopic.herokuapp.com/likes`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: image.id
      })
    }).then(res => res.json())
  }

  static commentOnImage(image, commentContent){
    return fetch(`https://randopic.herokuapp.com/comments`, {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        image_id: image.id,
        content: commentContent
      })
    }).then(res => res.json())
  }

  static deleteComment(commentId){
    return fetch(`https://randopic.herokuapp.com/comments/${commentId}`, {
      method: 'DELETE'
    }).then( res => res.json())
  }
}
