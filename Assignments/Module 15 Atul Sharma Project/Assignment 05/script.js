let playerName = document.getElementById("player-name");
let playerScore = document.getElementById("player-score");
let playerUniqueId = document.getElementById("player-unique-id");
let searchPlayer = document.getElementById("search-player");
let outputName = document.getElementById("output-name");
let outputScore = document.getElementById("output-score");
let outputUid = document.getElementById("output-uid");
let scoreBtn = document.getElementById("score-btn");

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


  setPlayer(playerName, playerScore, playerUniqueId) {
    const hashIndex = this._hash(playerName);
    if (this.table[hashIndex]) {
      for (let items of this.table[hashIndex]) {
        if (items[0] === playerName && items[2] === playerUniqueId) {
          items[1] += playerScore;
          return;
        }
      }
      this.table[hashIndex].push([playerName, playerScore, playerUniqueId]);
      return;
    } else {
      this.table[hashIndex] = [];
      this.table[hashIndex].push([playerName, playerScore, playerUniqueId]);
      console.log(this.table[hashIndex]);
      return;
    } 
  }


  get(key) {
    const index = this._hash(key);
    if (this.table[index]) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
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
          div1.innerText = "Name:"
          div3.innerText = "Score:"
          div5.innerText = "Unique Id:"
          div2.innerText = this.table[index][i][0];
          div4.innerText = this.table[index][i][1];
          div6.innerText = this.table[index][i][2];
          searchPlayer.value = "";
          return;
        }
      }
    }
    return undefined;
  }

  remove(key) {
    const index = this._hash(key);
    if (this.table[index] && this.table[index].length) {
      for (let i = 0; i < this.table[index].length; i++) {
        if (this.table[index][i][0] === key) {
          this.table[index].splice(i, 1);
          this.size--;
          return true;
        }
      }
    }
    else {
      return false;
    }
  }

  display() {
    this.table.forEach((values, index) => {
      const chainedValues = values.map(([playerName, playerScore, playerUniqueId]) => `\n[Name: ${playerName}, Score: ${playerScore}, Unique Id: ${playerUniqueId}]`);
      console.log(`${index}: ${chainedValues}`);
    });
  }

}


let myTable = new HashTable();

scoreBtn.addEventListener("click", () => {
  name = playerName.value;
  score = parseInt(playerScore.value);
  uId = playerUniqueId.value;
  myTable.setPlayer(name, score, uId);
  myTable.display();
})


function searchPlayerScore() {
  let searchPlayerName = searchPlayer.value;
  console.log(myTable.get(searchPlayerName));
}













