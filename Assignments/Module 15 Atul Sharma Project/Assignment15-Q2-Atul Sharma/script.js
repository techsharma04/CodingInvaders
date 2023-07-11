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
    console.log(castStack.add(castInput.value)+" -> " +castInput.value);
    castInput.value = "";
    castInput.focus();
    if(castStack.cast.length > 0){
      showCast.style.visibility = "visible";
    }
  }
});


showCast.addEventListener("click", () => {
  showCast.style.visibility = "hidden";
  let tbody = document.getElementById("output-body");
  
  for(let i=0; i < castStack.cast.length; i++){
    console.log(castStack.cast[i]);
    let tRow = document.createElement("tr");
    tbody.appendChild(tRow);
    let tCol1 = document.createElement("td");
    let tCol2 = document.createElement("td");
    tCol2.style.textAlign = "left";
    tCol2.style.paddingLeft = "25%";
    tRow.appendChild(tCol1);
    tRow.appendChild(tCol2);
    tCol1.innerText = i;
    tCol2.innerText = castStack.cast[i];
    document.getElementById("output").style.visibility = "visible";
  }
  
  
})

