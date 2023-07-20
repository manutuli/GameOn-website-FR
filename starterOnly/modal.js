 /* open and close nav  */ 
function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}
/* toggle modal */
function toggleModal () {
  modalbg.classList.toggle("hide")
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
const closebtns = document.querySelectorAll(".closeModal")
const modalbg = document.querySelector(".bground");
const modalContent = document.querySelector(".bground>.content");
const modalBody = document.querySelector(".modal-body");
const modalBtns = document.querySelectorAll(".modalBtn");
const formDivs = document.querySelectorAll(".formData");
const form = document.querySelector('form[name="reserve"]')
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
// launch modal event
modalBtns.forEach((btn) => btn.addEventListener("click", toggleModal))
closebtns.forEach((btn) => btn.addEventListener("click", toggleModal))
form.addEventListener("submit", (e)=>{
  e.preventDefault()
  // 
  const regex = new RegExp(/^(([a-z0-9]+)(\.?)([a-z0-9]+)(@)([a-z0-9]+)\.[a-z]{2,3})$/)
  const regNums = new RegExp(/([0-9])/)
  const fData = new FormData(form)
  // 
  if (!fData.get("first") || fData.get("first").length < 2 || regNums.test(fData.get("first"))) {
    displayFormError("veuillez entrer 2 caractères ou plus pour le champs du prénom", 0 )
  } else {
    hideFormError(0)
    isValid.first = true
  }
  // 
  if (!fData.get("last") || fData.get("last").length < 2 || regNums.test(fData.get("last"))) {
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
  // 
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
    // window.localStorage.clear()
    // for (pair of fData.entries()) {
    //   window.localStorage.setItem(`${pair[0]}`, `${pair[1]}`)
    // }
    // 
    const hiddenMessage = document.querySelector("p.confirmation.hide")
    const hiddenClose = document.querySelector("button.closeModal.hide")
    if (hiddenMessage) {
      // show confirmation
      hiddenMessage.classList.toggle("hide")
      hiddenClose.classList.toggle("hide")
      // show form
      for (const value in isValid) {isValid[value] = false}
      form.classList.toggle("hide")
    } else {
      // create confirmation
      const msg = document.createElement("p")
      const close = document.createElement("button")
      msg.innerText = "Merci pour votre inscription"
      close.innerText = "Fermer"
      // hide form
      form.classList.toggle("hide")
      close.classList.add("closeModal")
      msg.classList.add("confirmation")
      close.addEventListener('click', function () {
        form.reset() 
        for (let i = 0 ; i <= 6 ; i++) {
          hideFormError(i)
        }
        // hide confirmation
        msg.classList.toggle("hide")
        close.classList.toggle("hide")  
        // show form
        form.classList.toggle("hide")
        // close modal
        toggleModal()
      })
      // add confirmation
      modalBody.append(msg)
      modalContent.append(close)
      for (const value in isValid) {isValid[value] = false}
    }
  }
})

