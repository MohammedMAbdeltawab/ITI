let users = [];

let fName = document.getElementById("fName");
let lName = document.getElementById("lName");
let eMail = document.getElementById("eMail");
let password = document.getElementById("password");
let claim = document.getElementById("claim");
let claimedOK = document.getElementById("claimedOK");

claim.addEventListener("click", function () {
  let fNameError = document.getElementById("fNameError");
  let lNameError = document.getElementById("lNameError");
  let eMailError = document.getElementById("eMailError");
  let passwordError = document.getElementById("passwordError");
  if (!vaildateName(fName.value)) {
    console.log("Notvalid");
    fNameError.style.display = "flex";
    fName.style.backgroundImage = "url('./images/icon-error.svg')";
    return;
  }
  if (!vaildateName(lName.value)) {
    console.log("lastname not valid");
    fNameError.style.display = "none";
    fName.style.backgroundImage = "none";
    lName.style.backgroundImage = "url('./images/icon-error.svg')";
    lNameError.style.display = "flex";
    return;
  }
  if (!validateEmail(eMail.value)) {
    console.log("EmailNotvalid");
    lNameError.style.display = "none";
    fNameError.style.display = "none";
    lName.style.backgroundImage = "none";
    fName.style.backgroundImage = "none";
    eMail.style.backgroundImage = "url('./images/icon-error.svg')";
    eMailError.style.display = "flex";
    return;
  }
  if (!validatePassword(password.value)) {
    console.log("password Notvalid");
    eMailError.style.display = "none";
    lNameError.style.display = "none";
    fNameError.style.display = "none";
    lName.style.backgroundImage = "none";
    fName.style.backgroundImage = "none";
    eMail.style.backgroundImage = "none";
    password.style.backgroundImage = "url('./images/icon-error.svg')";
    passwordError.style.display = "flex";
    return;
  } else {
    passwordError.style.display = "none";
    password.style.backgroundImage = "none";
  }
  let user = {
    fName: fName.value,
    lName: lName.value,
    eMail: eMail.value,
    password: password.value,
  };
  users.push(user);
  console.log("Accepted");
  console.log(users);
  DisplayClaimed(user);
    clear();
});

function DisplayClaimed(user) {
  let claimedContainer = document.getElementById("claimedContainer");
  claimedContainer.classList.replace("d-none", "d-flex");
  let ClaimedName = document.getElementById("ClaimedName");
  ClaimedName.innerHTML = ` 
    ${user.fName} ${user.lName} `;
}
function clear() {
  fName.value = "";
  lName.value = "";
  eMail.value = "";
  password.value = "";
  eMailError.style.display = "none";
  lNameError.style.display = "none";
  fNameError.style.display = "none";
  passwordError.style.display = "none";
  lName.style.backgroundImage = "none";
  fName.style.backgroundImage = "none";
  eMail.style.backgroundImage = "none";
  password.style.backgroundImage = "none";
}
claimedOK.addEventListener('click',function(){
    let claimedContainer = document.getElementById("claimedContainer");
    claimedContainer.classList.replace("d-flex", "d-none");
});

function vaildateName(name) {
  let regex = /^[A-Za-z_]{3,10}$/;
  return regex.test(name);
}

function validateEmail(email) {
  let regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}
function validatePassword(password) {
  let regex = /^.{4,10}/;
  return regex.test(password);
}
