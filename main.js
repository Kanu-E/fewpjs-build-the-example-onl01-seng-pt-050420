// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// hide error modal
const modal = document.getElementById('modal');
modal.className = "hidden"


let glyphStates = {
  "♡": "♥",
  "♥": "♡"
};

let colorChange = {
  "red" : "",
  "": "red"
};

const hearts = document.querySelectorAll("ul > li > span")
for(let heart of hearts){
  heart.addEventListener('click', like);
};

function like(e){
  mimicServerCall("http://liverpoolfc.com")
  .then(rsp => changeHeart(e))
  .catch((error) => {
    setTimeout(function(){
      modal.className = ""
    }, 5000)

  });
};

function changeHeart(e){
  heart = e.target;
  heart.innerText = glyphStates[heart.innerText];
  heart.style.color = colorChange[heart.style.color];
};
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
