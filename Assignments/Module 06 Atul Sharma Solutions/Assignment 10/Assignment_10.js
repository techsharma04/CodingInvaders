let principal = parseFloat(prompt("Enter amount here...!!!"));
let years = parseFloat(prompt("Enter no. of years...!!!"));
let interestRate = 9;
let balance;
for(let i = 1; i < years + 1; i++){
    balance = principal * interestRate/100;
    balance += principal;
    principal = balance;
}
console.log(`Your balance is ${balance} after ${years} years`);




