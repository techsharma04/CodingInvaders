let btnPlay = document.querySelector(".btn-play");
let btnRestart = document.querySelector(".btn-restart");

let btnRed = document.querySelector(".btn-red");
let btnYellow = document.querySelector(".btn-yellow");
let btnBlue = document.querySelector(".btn-blue");
let btnGreen = document.querySelector(".btn-green");
let arr = [];

btnRed.addEventListener("click", () => {
    if(arr[0] === "red"){
        arr.shift();
    }
    else{
        alert("Oppss you lost");
    }
});
btnYellow.addEventListener("click", () => {
    if(arr[0] === "yellow"){
        arr.shift();
    }
    else{
        alert("Oppss you lost");
    }
});
btnBlue.addEventListener("click", () => {
    if(arr[0] === "blue"){
        arr.shift();
    }
    else{
        alert("Oppss you lost");
    }
});
btnGreen.addEventListener("click", () => {
    if(arr[0] === "green"){
        arr.shift();
    }
    else{
        alert("Oppss you lost");
    }
});

let level = 1;

let clickArr = [];
let colors = ["red", "green", "blue", "yellow"];
let btnObj = {
  red: btnRed,
  yellow: btnYellow,
  blue: btnBlue,
  green: btnGreen,
};

function flashing(color) {
    btnObj[color].classList.add("flash");
  setTimeout(() => {
    btnObj[color].classList.remove("flash");
  }, 500);
}

btnPlay.addEventListener("click", () => {
  if (level) {
    level += 1;
  }
  for (let i = 1; i <= level; i++) {
    let randColor = colors[Math.floor(Math.random() * colors.length)];
    arr.push(randColor);
        flashing(randColor);
    
  }

  console.log(arr);
  btnPlay.disabled = true;
  btnPlay.classList.add("opacity");
  btnRestart.classList.remove("opacity");
  btnRestart.disabled = false;
 
});



btnRestart.addEventListener("click", () => {
  level = level + 1 - level;
  btnPlay.disabled = false;
  btnPlay.classList.remove("opacity");
  btnRestart.classList.add("opacity");
  btnRestart.disabled = true;
});
