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
const formDivs = document.querySelectorAll(".formData");
const form = document.querySelector('[name="reserve"]')
// 
function formFieldError(errMsg, fieldNum) {
  // var span = document.querySelector(`form[name="reserve"]>div:nth-child(${fieldNum + 1})>span`)
  // if (!span || span.getAttribute("data-error") === undefined) {
  if (
    formDivs[fieldNum].getAttribute("data-error") === null ||
    formDivs[fieldNum].getAttribute("data-error") === undefined ) {
    // var span = document.createElement("span")
    formDivs[fieldNum].setAttribute("data-error", errMsg)
    // formDivs[fieldNum].setAttribute("data-error-visible", "true")
    // formDivs[fieldNum].appendChild(span)
    // console.log(formDivs[fieldNum].getAttribute("data-error-visible"))
    console.log(formDivs[fieldNum].getAttribute("data-error"))
  } 
  else {
    console.log(formDivs[fieldNum].getAttribute("data-error"))
    formDivs[fieldNum].setAttribute("data-error-vsible", "false")
    // console.log("span already exists.")
  }
}
// 
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal)
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  const fData = new FormData(form)
  // const formObj = 
  if (!fData.get("first")) {
    formFieldError("veuillez entrer 2 caractères ou plus pour le champs du prénom", 0 )
  }
  if (!fData.get("last")) {
    formFieldError("veuillez entrer 2 caractères ou plus pour le champs du nom.", 1 )
  }
  if (!fData.get("email")) {
    formFieldError("veuillez entrer un e-mail valide.", 2 )
  }
  if (!fData.get("birthdate")) {
    formFieldError("vous devez entrer votre date de naissance", 3 )
  }
  if (isNaN(parseInt(fData.get("quantity")))) {
    formFieldError("vous devez entrer un nombre.", 4 )
  }
  if (!fData.get("location")) {
    formFieldError("vous devez choisir une option.", 5 )
  }
  if (!fData.get("location")) {
    formFieldError("vous devez choisir une option.", 5 )
  }
  // console.log()
  // console.log("test--validation")
})
// 
// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}
//
function closeModal() {
  modalbg.style.display = "none"
  console.log("test--closeModal")
}
// 

