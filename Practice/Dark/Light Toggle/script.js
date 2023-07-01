let toggle = document.querySelector("button");
toggle.addEventListener("click", () => {
    let body = document.body;
    body.classList.toggle("dark-mode");
})