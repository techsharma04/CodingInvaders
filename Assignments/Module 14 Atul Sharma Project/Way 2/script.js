let signUp = document.getElementById("sign-up");

const nameError = document.getElementById("name-error");
const emailError = document.getElementById("email-error");
const passError = document.getElementById("pass-error");
const cPassError = document.getElementById("cpass-error");

const nameRegex = /^[a-zA-Z0-9\s]+$/;
const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
const passRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,10}$/;

isValid = {};

function redirect() {
    location.replace("assets/signup.html");
  }

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
    nameError.textContent = "Name cannot be empty";
  } else if (valName.length < 3 || valName.length > 20) {
    nameError.textContent = "Name must be between 3 - 20 characters";
  } else if (nameRegex.test(valName) === false) {
    nameError.textContent = "Invalid name";
  } else {
    nameError.textContent = "";
    isValid.name = "true";
    localStorage.setItem("username", valName);
  }

  // Handling email field with Validations
  if (valEmail.length === 0) {
    emailError.textContent = "Email cannot be empty";
  } else if (emailRegex.test(valEmail) === false) {
    emailError.textContent = "Invalid email";
  } else {
    emailError.textContent = "";
    isValid.email = "true";
  }

  // Handling password field with Validations
  if (valPass.length === 0) {
    passError.textContent = "Password cannot be empty";
  } else if (valPass.length < 3 || valPass.length > 10) {
    passError.textContent = "Password must be between 3 - 10 characters";
  } else if (passRegex.test(valPass) === false) {
    passError.textContent = "Invalid password";
  } else {
    passError.textContent = "";
    isValid.pass = "true";
  }

  // Handling confirm password field with Validations
  if (valCpass.length === 0) {
    cPassError.textContent = "Confirm password cannot be empty";
  } else if (valCpass.length < 3 || valCpass.length > 10) {
    cPassError.textContent =
      "Confirm password must be between 3 - 10 characters";
  } else if (passRegex.test(valCpass) === false) {
    cPassError.textContent = "Invalid confirm password";
  } else if (valPass !== valCpass) {
    passError.textContent = "Passwords don't match";
    cPassError.textContent = "Passwords don't match";
  } else {
    cPassError.textContent = "";
    isValid.cpass = "true";
  }

  if (
    isValid.name === "true" &&
    isValid.email === "true" &&
    isValid.pass === "true" &&
    isValid.cpass === "true"
  ) {
    redirect();
  }
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
  validation(dataObj);
});

