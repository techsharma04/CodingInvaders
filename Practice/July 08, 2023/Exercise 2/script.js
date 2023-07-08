const inpText = document.getElementById("inp-text");
const btn = document.querySelector("#calculate");

btn. addEventListener("click", () => {
    let calcLength = inpText.value.length;
    document.getElementById("output").innerHTML = calcLength;
})
