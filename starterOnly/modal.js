 /* open and close nav  */ 
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/* launch modal form */ 
function launchModal() {
  modalbg.style.display = "block";
}
/* close modal */
function closeModal() {
  modalbg.style.display = "none"
  console.log("test--closeModal")
}
/* display error message */ 
function displayFormError(errMsg, fieldIndex) {
  if (
    formDivs[fieldIndex].getAttribute("data-error") === null ||
    formDivs[fieldIndex].getAttribute("data-error") === undefined
  ) 
  {
    formDivs[fieldIndex].setAttribute("data-error", errMsg)
    formDivs[fieldIndex].setAttribute("data-error-visible", "true")
  } 
}
/* hide error message */ 
function hideFormError(fieldIndex) {
  if (formDivs[fieldIndex].getAttribute("data-error-visible") === "true" ) {
    formDivs[fieldIndex].setAttribute("data-error-visible", "false")
  }
}
// DOM Elements
const closeBtn = document.querySelector("span.close")
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formDivs = document.querySelectorAll(".formData");
const form = document.querySelector('[name="reserve"]')
// variables
let isValid = {
  first : false,
  last : false,
  email : false,
  birthdate : false,
  quantity : false,
  location : false,
  checkbox : false
}
const regex = new RegExp(/^(([a-z0-9]+)(\.?)([a-z0-9]+)(@)([a-z0-9]+)\.[a-z]{2,3})$/)
// 
// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));
closeBtn.addEventListener("click", closeModal)
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  // 
  const fData = new FormData(form)
  // 
  if (!fData.get("first") || fData.get("first").lenght<2) {
    displayFormError("veuillez entrer 2 caractères ou plus pour le champs du prénom", 0 )
  } else {
    hideFormError(0)
    isValid.first = true
  }
  // 
  if (!fData.get("last") || fData.get("last").lenght<2) {
    displayFormError("veuillez entrer 2 caractères ou plus pour le champs du nom.", 1 )
  } else {
    hideFormError(1)
    isValid.last = true
  }
  // 
  if (!fData.get("email") || !regex.test(fData.get("email"))) {
    displayFormError("veuillez entrer un e-mail valide.", 2 )
  } else {
    hideFormError(2)
    isValid.email = true
  }
  // 
  if (!fData.get("birthdate")) {
    displayFormError("vous devez entrer votre date de naissance", 3 )
  } else {
    hideFormError(3)
    isValid.birthdate = true
  }
  // 
  if (isNaN(parseInt(fData.get("quantity")))) {
    displayFormError("vous devez entrer un nombre.", 4 )
  } else {
    hideFormError(4)
    isValid.quantity = true
  }
  // 
  if (!fData.get("location")) {
    displayFormError("vous devez choisir une option.", 5 )
  } else {
    hideFormError(5)
    isValid.location = true
  }
  // 
  if (!fData.get("checkbox1")) {
    displayFormError("vous devez accepter les conditions générales.", 6 )
  } else {
    hideFormError(6)
    isValid.checkbox = true
  }
  if (
    isValid.first &&
    isValid.last &&
    isValid.email &&
    isValid.birthdate &&
    isValid.quantity &&
    isValid.location &&
    isValid.checkbox 
    ) 
  {
    window.localStorage.clear()
    for (pair of fData.entries()) {
      window.localStorage.setItem(`${pair[0]}`, `${pair[1]}`)
    }
    // fetch(url)
  }
})
// console.log("test--validation")

