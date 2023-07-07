// 
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
// 
// DOM Elements
const closeBtn = document.querySelector("span.close")
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
// const formData = document.querySelectorAll(".formData");
const form = document.querySelector('[name="reserve"]')
// 
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
// formData.forEach((field) => field.addEventListener("inputs", ))
closeBtn.addEventListener("click", toggleModal)
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  // console.log()
  // console.log(form)
  console.log("test--validation")
  
})
// 
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//
function toggleModal() {
  modalbg.style.display = "none"
  console.log("test--closeModal")
}
// 
// function validateForm() {
//   if()
//   console.log("test--validation")
// }
// 
