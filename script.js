const button = document.querySelector('button');

button.addEventListener('click', event => {
  button.textContent = `Click count: ${event.detail}`;
});


let myBtn = document.getElementById("my-btn");
myBtn.addEventListener("click", cfunction);

function cfunction() {
  console.log("CLICK");    
}