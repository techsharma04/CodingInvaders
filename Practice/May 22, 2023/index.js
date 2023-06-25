// function findAge(age){
//     if(age > 18){
//        alert("adult");
//     } else {
//        alert("Underage");
//     }
// }

// findAge(prompt("Enter your age.."));


// function lovesToCode(name){
//     console.log(`${name} loves to code`);
// }

// lovesToCode("Atul Sharma");



// function calculation(a,b,c){
//     let total = a*b*c;
//     return total;
// }

// console.log(calculation(201,530,895));



// function checkStringLength(str, num){
//     if(str.length === num){
//         console.log("true")
//     } else {
//         console.log("false");
//     }
// }

// checkStringLength("Atul Sharma", 8);




// function calcStringLength(str){
//     let output = str.length / 2;
//     let total = output * str.length;
//     return total;
// }   

// console.log(calcStringLength("Atul Sharma"));


// function calcStringLength(str) {
//     return str.length;
// }
// let length = calcStringLength("Atul Sharma");
// let output = length * (length / 2);
// console.log(output);



// function arrayCalc([a,b,c,d,e,f,g,h,i,j], num){
//     if([a,b,c,d,e,f,g,h,i,j].includes(num)){
//         return true;
//     } else {
//         return false;
//     }
// }
// let numArray = [10,11,12,5,9,3,8,7,4,55];
// let number = 9;
// let output = arrayCalc(numArray, number);
// if(output === true){
//     console.log(output);
//     for(let i=0; i < numArray.length; i++){
//         let total = numArray[i] * number;
//         console.log(total);
//     }

// } else {
//     console.log(output);
// }


// function chkStr(str, wrd){
//     let stringArray = string.split(" ");
//     if(stringArray.includes(wrd)){
//         return true;
//     } else {
//         return false;
//     }
// }

// let string = "Lorem ipsum dolor sit amet consectetur adipisicing elit Quos similique Repellat totam tempore eligendi quisquam quas ratione officiis deserunt ullam pariatur distinctio consequuntur voluptatibus nemo";
// let word = "totam";
// let output = chkStr(string, word);
// console.log(output);



// function maxSubset(arr, num) {
//     if (!arr.length) return false;
//     let count = 0;
//     let result = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] !== num) {
//             count = 0;
//         } else {
//             count++;
//             result = Math.max(result, count); // Maximum of result and count
//         }
//     }
//     console.log(result);
// }

// let numArray = [1,2,2,2,5,3,4,4,4,4,8,4,4];


// maxSubset(numArray, 4);
