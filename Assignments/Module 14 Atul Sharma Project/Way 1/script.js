let signUp = document.getElementById("sign-up");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("pass-error");
const cPassError = document.getElementById("cpass-error");

const nameRegex = /^[a-zA-Z0-9\s]+$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

let isValid = {};
let errorMsg = {};

// function redirect() {
    
//   }

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    let index = [...signUp].indexOf(event.target);
    if (index < 3) {
      signUp.elements[index + 1].focus();
    } else {
      document.getElementById("btn").click();
    }
  }
});

let validation = (dataObj) => {
  let valName = dataObj.valName;
  let valEmail = dataObj.valEmail;
  let valPass = dataObj.valPass;
  let valCpass = dataObj.valCpass;

  // Handling name field with Validations
  if (valName.length === 0) {
    errorMsg.name = "Name cannot be empty";
  } else if (valName.length < 3 || valName.length > 20) {
    errorMsg.name = "Name must be between 3 - 20 characters";
  } else if (nameRegex.test(valName) === false) {
    errorMsg.name = "Invalid name";
  } else {
    errorMsg.name = "";
    isValid.name = "true";
    localStorage.setItem("username", valName);
  }

  // Handling email field with Validations
  if (valEmail.length === 0) {
    errorMsg.email = "Email cannot be empty";
  } else if (emailRegex.test(valEmail) === false) {
    errorMsg.email = "Invalid email";
  } else {
    errorMsg.email = "";
    isValid.email = "true";
  }

  // Handling password field with Validations
  if (valPass.length === 0) {
    errorMsg.pass = "Password cannot be empty";
  } else if (valPass.length < 3 || valPass.length > 10) {
    errorMsg.pass = "Password must be between 3 - 10 characters";
  } else if (passRegex.test(valPass) === false) {
    errorMsg.pass = "Invalid password";
  } else {
    errorMsg.pass = "";
    isValid.pass = "true";
  }

  // Handling confirm password field with Validations
  if (valCpass.length === 0) {
    errorMsg.cpass = "Confirm password cannot be empty";
  } else if (valCpass.length < 3 || valCpass.length > 10) {
    errorMsg.cpass = "Confirm password must be between 3 - 10 characters";
  } else if (passRegex.test(valCpass) === false) {
    errorMsg.cpass = "Invalid confirm password";
  } else if (valPass !== valCpass) {
    errorMsg.pass = "Passwords don't match";
    errorMsg.cpass = "Passwords don't match";
  } else {
    errorMsg.cpass = "";
    isValid.cpass = "true";
  }

  // if (
  //   isValid.name === "true" &&
  //   isValid.email === "true" &&
  //   isValid.pass === "true" &&
  //   isValid.cpass === "true"
  // ) {
  //   redirect();
  // }

  return errorMsg;
};


signUp.addEventListener("submit", (action) => {
  action.preventDefault();
  let dataArray = Array.from(action.target);
  let dataObj = {
    valName: dataArray[0].value,
    valEmail: dataArray[1].value,
    valPass: dataArray[2].value,
    valCpass: dataArray[3].value,
  };
  let errors =  validation(dataObj);
  if(Object.keys(errors).length > 0){
    nameError.textContent = errorMsg.name || "";
    emailError.textContent = errorMsg.email || "";
    passError.textContent = errorMsg.pass || "";
    cPassError.textContent = errorMsg.cpass || "";

    signUp.addEventListener("change", (event) => {
        let index = [...signUp].indexOf(event.target);
        let errorSpan = document.querySelectorAll(".span-error");
        errorSpan[index].textContent = "";
    });
    
  } else{
    nameError.textContent = "";
    emailError.textContent = "";
    passError.textContent = "";
    cPassError.textContent = "";
    location.replace("assets/signup.html");
  }
});


