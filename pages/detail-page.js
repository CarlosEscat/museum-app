function submitComment(){
    const inputField = document.getElementById('name')
    const name = inputField.value
    const textArea = document.getElementById('msg')
    const msg = textArea.value
    const comment = document.createElement('section')
    const h3 = document.createElement('h3')
    const p = document.createElement('p')

    if(doesNotPassAllValidations(name, msg)){
        return null
    }

    h3.innerHTML = `${name[0].toUpperCase() + name.slice(1)} said:`
    p.innerHTML = msg
    comment.classList.add('comment')
    comment.appendChild(h3)
    comment.appendChild(p)
    
    const commentSection = document.getElementById('comments')
    commentSection.appendChild(comment)
    
    inputField.value = null
    textArea.value = null
}

function doesNotPassAllValidations(name, msg) {
    if (!name && !msg) {
      alert('You forgot to fill in your name or message!')
      return true;
    } else if (!name) {
        alert('You forgot to fill in your name!')
        return true;
    } else if (!msg){
        alert('You forgot to fill in your message!')
        return true;
    } else {
        return false
    }

    if(msg.length > 280) {
      alert('Your comment is too long')
      return true
    }

    return false
  }