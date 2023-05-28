// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
// Function to toggle heart
function toggleHeart(heart) {
  if (heart.textContent === EMPTY_HEART) {
    heart.textContent = FULL_HEART;
    heart.classList.add('activated-heart');
  } else {
    heart.textContent = EMPTY_HEART;
    heart.classList.remove('activated-heart');
  }
}

// Function to handle heart click event
function handleHeartClick(event) {
  const heart = event.target;
  mimicServerCall()
    .then(() => {
      toggleHeart(heart);
    })
    .catch((error) => {
      const errorModal = document.getElementById('error-modal');
      const errorMessage = errorModal.querySelector('#error-message');
      errorMessage.textContent = error;
      errorModal.classList.remove('hidden');
      setTimeout(() => {
        errorModal.classList.add('hidden');
      }, 3000);
    });
}

// Add click event listener to hearts
const hearts = document.querySelectorAll('.like-glyph');
hearts.forEach((heart) => {
  heart.addEventListener('click', handleHeartClick);
});



//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
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
