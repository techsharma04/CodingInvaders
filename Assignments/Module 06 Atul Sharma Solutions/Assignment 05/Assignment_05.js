let profit = parseInt(window.prompt("Enter amount to calculate..!!!"));
console.log(`Total amount entered is: ${profit}`);
let total = 0;

while (profit > 0 && profit !== NaN) {
    total += profit;
    console.log(`The total after an entry is ${total}`)
    profit = parseInt(window.prompt("Enter amount to calculate..!!!"));
    console.log(`Total amount entered is: ${profit}`);
}
console.log(`The total profit is: ${total} INR`);
