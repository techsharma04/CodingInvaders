const btn = document.querySelector("button")
const box = document.querySelector("#colored")

btn.addEventListener('click', () => {
    box.style.marginLeft = "300px"
    box.style.backgroundColor = "yellow";
    box.style.width = "200px";
    box.style.height = "200px";
    
})
