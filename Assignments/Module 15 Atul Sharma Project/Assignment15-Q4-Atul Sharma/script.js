const alertBox = document.getElementById("alert-box");
const tbody = document.getElementById("tbody");
let balance = 25000;

class Statement {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    return this.items.push(element);
  }
}

let tranactions = new Statement();

let purchase = (product, amount) => {
  if (balance >= amount) {
    balance -= amount;
    balance = Math.floor(balance * 100) / 100;
    if (balance >= 0) {
      const ticketDetails = {};
      ticketDetails.product = product;
      ticketDetails.debit = amount;
      ticketDetails.balance = balance;
      tranactions.enqueue(ticketDetails);
      console.log(ticketDetails);
      console.log(`The available credit balance is ${balance}`);
    }
  } else {
    console.log(`You do not have enough balance to complete this transaction.`);
  }
};

function balanceCheck() {
  console.log(`Rs. ${balance}`);
  document.getElementById("count-btn").innerHTML = `&#8377; ${balance}`;
  setTimeout(() => {
    document.getElementById("count-btn").innerHTML = "Check Available Balance";
  }, 5000);
}

function transactionsCheck() {
  alertBox.style.visibility = "visible";
  for (let i = 0; i < tranactions.items.length; i++) {
    let tr = document.createElement("tr");
    tbody.appendChild(tr);
    let td1 = document.createElement("td");
    let td2 = document.createElement("td");
    let td3 = document.createElement("td");
    let td4 = document.createElement("td");
    let td5 = document.createElement("td");
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);
    td1.innerText = i + 1;
    td2.innerText = i;
    td3.innerText = tranactions.items[i].product;
    td4.innerText = tranactions.items[i].debit;
    td5.innerText = tranactions.items[i].balance;
    console.log(`Item Count: ${i + 1}, \n Array Index: ${i}, \n Purchased Item: ${tranactions.items[i].product}, \n Debit Amount: ${tranactions.items[i].debit}, \n Balance Amount: ${tranactions.items[i].balance}`);
  }
}

function vanishAlertBox() {
  alertBox.style.visibility = "hidden";
  while (tbody.hasChildNodes()) {
    tbody.removeChild(tbody.firstChild);
  }
}
