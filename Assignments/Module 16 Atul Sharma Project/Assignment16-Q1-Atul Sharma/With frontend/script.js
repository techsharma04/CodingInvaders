const btn = document.querySelector("button");
const billAmount = document.getElementById("amount");
const billDiscount = document.getElementById("discount");
const billDue = document.getElementById("due");



let calculate = () => {
    let amount = billAmount.value;
    if (amount >= 5000) {
        amount = amount - amount * (20 / 100);
        billDiscount.value = "20%";
        billDue.value = amount;
        return `The bill amount was $${billAmount.value}. \nDiscount Applied: 20%. \nTotal amount to be paid: $${amount}.`;
    } else if (amount >= 3000 && amount < 5000) {
        amount = amount - amount * (15 / 100);
        billDiscount.value = "15%";
        billDue.value = amount;
        return `The bill amount was $${billAmount.value}. \nDiscount Applied: 15%. \nTotal amount to be paid: $${amount}.`;
    } else if (amount >= 2000 && amount < 3000) {
        amount = amount - amount * (10 / 100);
        billDiscount.value = "10%";
        billDue.value = amount;
        return `The bill amount was $${billAmount.value}. \nDiscount Applied: 10%. \nTotal amount to be paid: $${amount}.`;
    } else {
        amount = amount - amount * (0 / 100);
        billDiscount.value = "0%";
        billDue.value = amount;
        return `The bill amount was $${billAmount.value}. \nDiscount Applied: 0%. \nTotal amount to be paid: $${amount}.`;
    }
}


btn.addEventListener("click", () => {
    if (billAmount.value !== 0 && billAmount.value !== "" && billAmount.value !== null) {
        let output = calculate();
        console.log(output);
    } else {
        let output = "Please enter the bill amount to get final amount.";
        console.log(output);
    }
})