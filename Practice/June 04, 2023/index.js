// let name = function (params) {
//     console.log(params);
// }
// name(`Hello`);



// let myFunc = function () {
//     console.log(`This is a named function!`);
// };
// myFunc();



// let greet = (user, pass) =>  `Hello ${user}, \nYour Password is ${pass}`;


// console.log(greet("Atul Sharma", "123456"));


// function sum(a, b) {
//     return a + b;
// }

// let sum = (a, b) => a + b;

// console.log(sum(2, 5));

// function myFunc(a,b) {
//     return a+b;
// }

// let myFunc = (a, b) => a + b;
// console.log(myFunc(3, 8));


// let balance = 5000;

// let deposit = amount => balance += amount;

// let withdrawal = amount => balance -= amount; 

// function updateBalance(amount, typeOfOperations){

//     typeOfOperations(amount);
// }


// updateBalance(1500, deposit);

// console.log(balance);



// let num = [2, 3, 5, 4, 8, 6, 9];

// let result = num.find((eachItem) => {
//     if(eachItem > 3){
//         return eachItem;
//     }
// })
// console.log(result);


// const numArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
// const oddArray = numArray.filter(e => e % 2 !== 0);
// const evenArray = numArray.filter(e => e % 2 === 0);
// console.log(evenArray);
// console.log(oddArray);


// let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let res = arr.some(e => e % 2 === 0);
// console.log(res); 


// let arr = [7, 2, 1, 0, 5, 8, 3, 9, 6];

// let res = arr.sort((x,y)=>{
//     return (x - y);
// })
// console.log(res);


// let arr = [9.2, 3, 0.8, 77.2, 53.87];

// let res = arr.reduce((sum, eachValue) => {
//     return sum += eachValue;
// }, 0)
// console.log(res);





// let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9];

// let res = arr.every(e => e % 2 === 0);
// console.log(res); 