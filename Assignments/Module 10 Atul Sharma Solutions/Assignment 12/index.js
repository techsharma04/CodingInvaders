const friendsArray = [

    { id: 1, name: "Abhay", amount: 2000 },

    { id: 2, name: "Bunty", amount: 3000 },

    { id: 3, name: "Chinki", amount: 5900 },

    { id: 4, name: "Dimple", amount: 1000 },

    { id: 5, name: "Erica", amount: 2370 }

];


// Part 1
// -------one way-------
let numbers = [];
friendsArray.forEach((element) => {
    numbers.push(element.amount);
})

let sumResult = numbers.reduce((sum, eachValue) => {
    return sum += eachValue;
})
console.log(`The sum of all the amount in the friends list is: ${sumResult}`);

// -------another way-------
function result(friendsAmount) {
    let total =  friendsAmount.reduce((sum, friendsAmount) => sum + friendsAmount.amount, 0);
    return total;
}

let totalAmount = result(friendsArray);
console.log(`The sum of all the amount in the friends list is: ${totalAmount}`);






// Part 2
let sortResult = friendsArray.sort((x,y) => {
    return x.amount - y.amount;
});
console.log(sortResult);





// Part 3
let sortReverse = friendsArray.sort((x,y) => {
    return y.amount - x.amount;
});
console.log(sortResult);




// Part 4
let maxAmount = 0;
let largestObject = null;
let largetAmount = friendsArray.forEach ((element) => {
    if(element.amount > maxAmount){
        maxAmount = element.amount; 
        largestObject = element;
    }
})
console.log(largestObject);






// Part 5
let minAmount = Infinity;
let smallestObject = null;
let smallestAmount = friendsArray.forEach ((element) => {
    if(element.amount < minAmount){
        minAmount = element.amount; 
        smallestObject = element;
    }
})
console.log(smallestObject);