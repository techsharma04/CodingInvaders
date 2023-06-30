let btnPlay = document.querySelector(".btn-play");
let btnRestart = document.querySelector(".btn-restart");

let btnRed = document.querySelector(".btn-red");
let btnYellow = document.querySelector(".btn-yellow");
let btnBlue = document.querySelector(".btn-blue");
let btnGreen = document.querySelector(".btn-green");
deActivateButtons(true);

let levelHeading = document.querySelector("h1");
let message = document.querySelector("p");
let section = document.querySelector(".section");

let arr = [];
let btnClick = [];
let level = 1;
let flashTime;
let leaderBoard = 0;
let leaderBoardRecord = []

let colors = ["red", "green", "blue", "yellow"];
let btnObj = {
  red: btnRed,
  yellow: btnYellow,
  blue: btnBlue,
  green: btnGreen,
};


//windows onload function - have to display the leaderboard
window.addEventListener('DOMContentLoaded', () => {
    
  const prevScores = JSON.parse(window.localStorage.getItem("record"));
  if (prevScores && prevScores.length) {
      //copy of score history to push new score at last
      scoreRecord = [...prevScores];
      for (const prevScore of prevScores) {
          let listLeaderBoard = document.createElement("li");
  section.appendChild(listLeaderBoard);
  listLeaderBoard.textContent = `Your score is ${prevScore}`;
      }
  }
});

// Event call by clicking play
btnPlay.addEventListener("click", async () => {
  message.innerText = "";
  activateButtons(false);
  flashTime = level + 1;
  for (let i = 1; i <= flashTime; i++) {
    let randColor = colors[Math.floor(Math.random() * colors.length)];
    arr.push(randColor);
    await flashing(randColor);
  }
  btnPlay.disabled = true;
  btnPlay.classList.add("opacity");
  btnRestart.classList.remove("opacity");
  btnRestart.disabled = false;
});

function activateButtons(value) {
  btnRed.disabled = value;
  btnYellow.disabled = value;
  btnBlue.disabled = value;
  btnGreen.disabled = value;
}
function deActivateButtons(value) {
  btnRed.disabled = value;
  btnYellow.disabled = value;
  btnBlue.disabled = value;
  btnGreen.disabled = value;
}
// Flash buttons
function flashing(color) {
  return new Promise((resolve, reject) => {
    btnObj[color].classList.add("flash");
    setTimeout(() => {
      btnObj[color].classList.remove("flash");
      setTimeout(() => {
        resolve();
      }, 250);
    }, 250);
  });
}

btnRed.addEventListener("click", () => {
  btnClick.push("red");
  userResult(arr[0], btnClick[0]);
});
btnYellow.addEventListener("click", () => {
  btnClick.push("yellow");
  userResult(arr[0], btnClick[0]);
});
btnBlue.addEventListener("click", () => {
  btnClick.push("blue");
  userResult(arr[0], btnClick[0]);
});
btnGreen.addEventListener("click", () => {
  btnClick.push("green");
  userResult(arr[0], btnClick[0]);
});

function userResult(arr1, arr2) {
  if (arr1 === arr2) {
    arr.shift();
    btnClick.shift();
    if (arr.length === 0 && btnClick.length === 0) {
      success();
    } 
  }else {
    failure();
  }
}

function success() {
  deActivateButtons(true);
  level += 1;
  levelHeading.innerText = `Level ${level}`;
  message.innerText =
    "You have won this round. Click on the play button to start next round";
  leaderBoard += 1;
  btnPlay.disabled = false;
  btnPlay.classList.remove("opacity");
}

function failure() {
  deActivateButtons(true);
  message.innerText = "You Lost this round! Click on restart to start again!";
  btnPlay.disabled = true;
  btnPlay.classList.add("opacity");
  leaderBoardRecord.push(leaderBoard);
  let listLeaderBoard = document.createElement("li");
  section.appendChild(listLeaderBoard);
  listLeaderBoard.textContent = `Your score is ${leaderBoard}`;
  window.localStorage.setItem("record", JSON.stringify(leaderBoard))
}

btnRestart.addEventListener("click", () => {
  message.innerText = "";
  deActivateButtons(true);
  level = 1;
  flashTime = level;
  arr = [];
  btnClick = [];
  btnPlay.disabled = false;
  btnPlay.classList.remove("opacity");
  btnRestart.classList.add("opacity");
  btnRestart.disabled = true;
  console.log(level, flashTime, arr);
});



