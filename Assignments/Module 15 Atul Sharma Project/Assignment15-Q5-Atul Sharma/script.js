let playerName = document.getElementById("player-name");
let playerScore = document.getElementById("player-score");
let playerUniqueId = document.getElementById("player-unique-id");
let searchPlayer = document.getElementById("search-player");
let outputName = document.getElementById("output-name");
let outputScore = document.getElementById("output-score");
let outputUid = document.getElementById("output-uid");
let msg = document.getElementById("msg");
let scoreBtn = document.getElementById("score-btn");

// For User eXperience..
let div1 = document.createElement("div");
let div2 = document.createElement("div");
let div3 = document.createElement("div");
let div4 = document.createElement("div");
let div5 = document.createElement("div");
let div6 = document.createElement("div");
outputName.appendChild(div1);
outputName.appendChild(div2);
outputScore.appendChild(div3);
outputScore.appendChild(div4);
outputUid.appendChild(div5);
outputUid.appendChild(div6);

class HashTable {
  constructor() {
    this.table = new Array(100);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }
    return hash % this.table.length;
  }

  setPlayer(playerNameValue, playerScoreValue, playerUniqueIdValue) {
    playerName.value ="";
    playerScore.value = "";
    playerUniqueId.value = "";

    const hashIndex = this._hash(playerNameValue);
    if (this.table[hashIndex]) {
      for (let items of this.table[hashIndex]) {
        if (items[0] === playerNameValue && items[2] === playerUniqueIdValue) {
          items[1] += playerScoreValue;
          msg.innerHTML = `Player score at index ${hashIndex} with Unique id ${playerUniqueIdValue} is updated. New score is ${items[1]}`;
          setTimeout(() => {
            msg.innerHTML = "";
          }, 3500);
          return msg.innerHTML;
        }
      }
      this.table[hashIndex].push([playerNameValue, playerScoreValue, playerUniqueIdValue]);
      msg.innerHTML = `Different player with the same name is added at index ${hashIndex}.  <b>Name:</b> ${playerNameValue},  <b>Score:</b> ${playerScoreValue},  <b>Unique Id:</b> ${playerUniqueIdValue}`;
      setTimeout(() => {
        msg.innerHTML = "";
      }, 3500);
      return msg.innerHTML;
    } else {
      this.table[hashIndex] = [];
      this.table[hashIndex].push([playerNameValue, playerScoreValue, playerUniqueIdValue]);
      msg.innerHTML = `Player Details are added at index ${hashIndex}.  <b>Name:</b> ${playerNameValue},  <b>Score:</b> ${playerScoreValue}, <b>Unique Id:</b> ${playerUniqueIdValue}`;
      setTimeout(() => {
        msg.innerHTML = "";
      }, 3500);
      return msg.innerHTML;
    }
  }

  get(key) {
    const hashIndex = this._hash(key);
    let playerDetails;
    if (this.table[hashIndex]) {
      if (this.table[hashIndex].length > 1) {
        let pUid = prompt("Found multiple records with the provided name. Please specify Unique Id.");
        for (let i = 0; i < this.table[hashIndex].length; i++) {
          if (this.table[hashIndex][i][0] === key && this.table[hashIndex][i][2] === pUid) {
            let name = this.table[hashIndex][i][0];
            let score = this.table[hashIndex][i][1];
            let uid = this.table[hashIndex][i][2];
            playerDetails = `Found it: \n[Name: ${name}, Score: ${score}, Unique Id: ${uid}]`;
            div1.innerText = "Name:";
            div3.innerText = "Score:";
            div5.innerText = "Unique Id:";
            div2.innerText = name;
            div4.innerText = score;
            div6.innerText = uid;
            searchPlayer.value = "";
            return playerDetails;
          }
        }
      } else if (this.table[hashIndex].length === 1) {
        let name = this.table[hashIndex][0][0];
        let score = this.table[hashIndex][0][1];
        let uid = this.table[hashIndex][0][2];
        playerDetails = `Found it: \n[Name: ${name}, Score: ${score}, Unique Id: ${uid}]`;
        div1.innerText = "Name:";
        div3.innerText = "Score:";
        div5.innerText = "Unique Id:";
        div2.innerText = name;
        div4.innerText = score;
        div6.innerText = uid;
        searchPlayer.value = "";
        return playerDetails;
      } else {

      }
    }
    alert("Player not found..")
    return "Player Not found";
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(
        ([playerName, playerScore, playerUniqueId]) =>
          `\n[Name: ${playerName}, Score: ${playerScore}, Unique Id: ${playerUniqueId}]`
      );
      // alert(`${index}: ${chainedValues}`);
      console.log(`${index}: ${chainedValues}`);
    });
  }
}

let myTable = new HashTable();

scoreBtn.addEventListener("click", () => {
  name = playerName.value;
  score = parseInt(playerScore.value);
  uId = playerUniqueId.value;
  console.log(myTable.setPlayer(name, score, uId));
  // myTable.display();
});

function searchPlayerScore() {
  let searchPlayerName = searchPlayer.value;
  console.log(myTable.get(searchPlayerName));
}
