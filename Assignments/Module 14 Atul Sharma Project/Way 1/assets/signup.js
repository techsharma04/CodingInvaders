
const greetings = document.querySelector("h1");
const username = localStorage.getItem("username");
greetings.innerHTML = `Hello <font color = red>${username}</font> ! <br>You have successfully signed up.`


function redirect() {
    location.replace("../");
}