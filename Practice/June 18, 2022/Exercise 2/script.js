const changeText = document.querySelector("button");

changeText.addEventListener("click", function () {
  const pText = document.getElementById("ptext");
  if (pText.innerText === "Hello Everyone") {
    pText.innerText = "Hello World";
  } else {
    pText.innerText = "Hello Everyone";
  }
});

// function changeText(){
//    document.getElementById("ptext").innerText = "Hello Everyone";

// }
