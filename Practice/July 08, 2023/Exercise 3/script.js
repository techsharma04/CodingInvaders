const inpText = document.getElementById("inp-text");
const btn = document.querySelector("#calculate");
const selectOption = document.querySelector("#selection");

function selection() {
  if (selectOption.value === "1") {
    btn.addEventListener("click", () => {
      let calcLength = inpText.value.length;
      document.getElementById("output").innerHTML = calcLength;
    });
  }
  if (selectOption.value === "2") {
    inpText.addEventListener("keydown", () => {
      let calcLength = inpText.value.length + 1;
      document.getElementById("output").innerHTML = calcLength;
    });
  }
}
