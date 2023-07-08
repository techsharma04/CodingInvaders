const button1 = document.querySelector("#btn1");
const button2 = document.querySelector("#btn2");
const button3 = document.querySelector("#btn3");
const button4 = document.querySelector("#btn4");
const body = document.querySelector("body");

button1.addEventListener("click", () => {
  body.style.backgroundColor = "grey";
});
button2.addEventListener("click", () => {
  body.style.backgroundColor = "blanchedalmond";
});
button3.addEventListener("click", () => {
  body.style.backgroundColor = "blue";
});
button4.addEventListener("click", () => {
  body.style.backgroundColor = "yellow";
});


