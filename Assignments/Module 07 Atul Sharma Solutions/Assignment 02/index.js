let amounts = [];
let total = 0;
let price;
do{
    price = parseFloat(prompt("Enter the amount or type 0 to exit"));
    amounts.push(price); 
}
while (price !== 0);

for(const amount of amounts){
    total += amount;    
}
if(total > 20000) {
    subtotal = total*30/100;
    totalAmount = total - subtotal;
    alert(`The total sum to pay (with the activated discount) is ${totalAmount}`)
}else {
    alert(`The total sum to pay is ${total}`)
}





