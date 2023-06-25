// Problem 1

let C = prompt("Please enter the tempreature in celsius...");
let F = C*(9/5)+32;
console.log(F);



// Problem 2

let str = prompt("Please write something...");
console.log(str.toLowerCase());
console.log(str.length);
console.log(str.charAt(0).toLowerCase());
console.log(str.charAt(str.length-1).toLowerCase());



// Problem 3

let str1 = prompt("Please write something...");
let str2 = prompt("Please write something...");
let i = str1.indexOf(str2);
console.log(str1.slice(i, str1.length).toUpperCase());



// Problem 4

let word = prompt("Please write any word...");
let splitWord = word.split("");
let revWord = splitWord.reverse();
let joinWord = revWord.join("");
console.log(joinWord.charAt(0).toUpperCase() + joinWord.slice(1, joinWord.length));



// Problem 5

let fname = prompt("Enter your first name here..");
let lname = prompt("Enter your last name here..");
let age = prompt("Enter your age here..");
let gender = prompt("Enter your gender here..");
let phone = prompt("Enter your phone number here..");
let city = prompt("Enter your city here..");
console.log(`${fname} ${lname} who is a ${gender}, aged ${age} years, lives in ${city}, ${fname}\'s contact number is ${phone}.`);



// Problem 6

let text = prompt("Enter text here..");
let word1 = prompt("Enter first word here..");
let word2 = prompt("Enter second word here..");
console.log(text.replace(word1, word2));



//Problem 7

let pname = prompt("Which product you want to buy?");
let price = prompt("What\'s the price of the item?");
let qty = prompt("How many products?");
let discount = prompt("Is there any discount?");
let bd = price * qty;
let ad = bd * discount/100;
let st = bd - ad; 
console.log(`You have successfully purchased ${qty} products titles \"${pname}\". \n Amount before the discount is Rs. ${bd}. \n Amount after the ${discount} is Rs. ${st}.`);



// Problem 8

let text1 = prompt("Write something here..");
let animalBirds = /\b(cat|dog|parrot|squirrel|peacock|rabbit|monkey|elephant)\b/gi;
let output = text1.match(animalBirds);
console.log(output[0].toUpperCase());
console.log(output[1].toUpperCase());
console.log(output[2].toUpperCase());
console.log(output[3].toUpperCase());



// Problem 9

let txtInput = prompt("Write something here..");
let wrdInput = prompt("Write a word here...");
let letter1 = wrdInput.charAt(0);
let letter2 = wrdInput.charAt(wrdInput.length-1);
let pos1 = txtInput.indexOf(letter1);
let pos2 = txtInput.indexOf(letter2);
let pos3 = txtInput.lastIndexOf(letter1);
let pos4 = txtInput.lastIndexOf(letter2);
console.log(`The position of first and last letter for first occurrence of the word \"you\" is ${pos1} and ${pos2}, and the position of letters for its last occurrence is ${pos3} and ${pos4}.`)



// Problem 10

let num1 = prompt("Type any number here..");
let add = num1++;
console.log(`Result after adding is ${num1}`);
let sub = num1--;
console.log(`Result after subtraction is ${num1}`);
console.log(`Boolean value is ${!num1}`);



// Problem 11

let x = 10;
let y = ((4 * x**2 + 18 - 23*x)/((5/9) * x + 18 * x**3 / 33*x))+x*15/12;
console.log(y);



// Problem 12

let TAXES, RENT, FOOD, OTHER, MY_SALARY;

TAXES = 0.20;
RENT = 20000
FOOD = 12000
OTHER = 13000
MY_SALARY = 70000

TaxAmount = MY_SALARY * TAXES;
mySalaryNet = MY_SALARY - TaxAmount;
totalAvailable = mySalaryNet - RENT;
totalAvailable -= FOOD + OTHER;

alert(`My salary is ${MY_SALARY} INR`);
alert(`I payed ${TaxAmount} INR as taxes`);
alert(`I have ${totalAvailable} INR left`);