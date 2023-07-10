const addCast = document.querySelector("#alert-box-btn");
const showCast = document.querySelector("#cast-btn");
const castInput = document.getElementById("castInput");

class Movie {
  constructor() {
    this.cast = [];
  }

  add(castMemberName) {
    return this.cast.push(castMemberName);

  }

  size() {
    return this.cast.length - 1;
  }
}

let castStack = new Movie();

addCast.addEventListener("click", () => {
  if(castInput.value !== ""){
    console.log(castStack.add(castInput.value));
    castInput.value = "";
    castInput.focus();
    if(castStack.cast.length > 0){
      showCast.style.visibility = "visible";
    }
  }
});


showCast.addEventListener("click", () => {
  console.log(castStack.cast);
})


