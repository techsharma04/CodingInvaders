// Q1.

// function sumArray(arr) {
//     let newArray = new Set();
//     let num = 0;
//     for (let i = 0; i < arr.length; i++) {
//         num += arr[i];
        
//     }
//     return num;
// }

// let array = [1, 2, 3, 4, 5];
 
// console.log(sumArray(array));


// Q2.

// function countOccurrences(fruits) {
//     let occurrences = {};
  
//     for (let i = 0; i < fruits.length; i++) {
//       let fruit = fruits[i];
//       occurrences[fruit] = (occurrences[fruit] || 0) + 1;
//     }
  
//     return occurrences;
//   }

//   let arr = ["apple", "banana", "apple", "orange", "banana", "apple"];
//   console.log(countOccurrences(arr));



function findLongestWord(arr) {
    let fruits = new Set();
    for(let fruit of fruits){
        let countLength = fruit.length;
        console.log(countLength);
    }
}
let array = ["apple", "banana", "orange", "grapefruit"];
findLongestWord(array);