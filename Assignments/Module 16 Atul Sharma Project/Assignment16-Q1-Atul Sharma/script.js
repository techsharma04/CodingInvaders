const billAmount = prompt("Please enter the total bill amount");

let calculate = () => {
    let amount = Number(billAmount);
    let message;
    if (amount >= 5000) {
        amount = amount - amount * (20 / 100);
        message = `The bill amount was $${billAmount}. \nDiscount Applied: 20%. \nTotal amount to be paid: $${amount}.`;
    } else if (amount >= 3000 && amount < 5000) {
        amount = amount - amount * (15 / 100);
        message = `The bill amount was $${billAmount}. \nDiscount Applied: 15%. \nTotal amount to be paid: $${amount}.`;
    } else if (amount >= 2000 && amount < 3000) {
        amount = amount - amount * (10 / 100);
        message = `The bill amount was $${billAmount}. \nDiscount Applied: 10%. \nTotal amount to be paid: $${amount}.`;
    } else {
        message = `The bill amount was $${billAmount}. \nDiscount Applied: 0%. \nTotal amount to be paid: $${amount}.`;
    }
    return message;
}


console.log(calculate());