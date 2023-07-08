
const button = document.querySelectorAll(".btn");
let colors = Array.from(button);
const body = document.querySelector("body");


for(let color of colors){
  color.addEventListener("click", () => {
    let item = color.getAttribute("id");
    body.style.backgroundColor = item;
  })
}

