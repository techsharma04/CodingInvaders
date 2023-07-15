let balance = 25000;

class Statement {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    return this.items.push(element);
  }

  balanceCheck() {
    return `Rs. ${balance}`;
  }

  transactionsCheck() {
    this.items.forEach((index) => {
      console.log(index);
    })
    return
  }

  purchase(amount) {
    if (balance >= amount) {
      balance -= amount;
      balance = Math.floor(balance * 100) / 100;
      if (balance >= 0) {
        const ticketDetails = {};
        ticketDetails.debit = amount;
        ticketDetails.balance = balance;
        tranactions.enqueue(ticketDetails);
        return `The amount of debit is: ${amount} \nThe available credit balance is ${balance}`;
      }
    } else {
      return `You do not have enough balance to complete this transaction.`;
    }
  }

}

let tranactions = new Statement();


function promptBox1() {
  const promptOptions1 = Number(prompt(`Please enter one of the provided options to proceed.. \n\n 1. Purchase \n 2. Credit Balance \n 3. Transactions \n 4. Done`));
  if (promptOptions1 === 1) {
    const debitAmount = Number(prompt(`Enter the amount you want to debit.`));
    console.log(tranactions.purchase(debitAmount));
    promptBox1();
  } else if (promptOptions1 === 2) {
    console.log(tranactions.balanceCheck());
    promptBox1();
  } else if (promptOptions1 === 3) {
    tranactions.transactionsCheck();
    promptBox1();
  } else if (promptOptions1 === 4) {

  } else {
    alert("Not a valid input. Please write the provided numbers only.");
    promptBox1();
  }
}





