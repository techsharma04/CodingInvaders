const btn = document.getElementsByClassName("btn");
const btnArr = Array.from(btn);
const text = document.querySelector("#text-span");

btnArr.forEach((element) => {
    element.addEventListener("mouseover", (event) => {
        const eId = event.target.id;
        text.innerHTML = `You hovered over ${eId}`;
    })
})