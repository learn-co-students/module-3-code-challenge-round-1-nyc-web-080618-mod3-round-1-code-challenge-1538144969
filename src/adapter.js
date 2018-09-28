class Adapter {
  static getImage(){
    return fetch('https://randopic.herokuapp.com/images/bf3b9b13-ea35-4b6d-aa88-23838d89ebc8')
      .then((resp) => resp.json())
  }

}
