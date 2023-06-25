// One way
let arr =  [1, 2, 3, 4, 5];
while (arr.length > 0){
    arr.pop();
}
console.log(arr);





// Another Way
let arr1 = [1, 2, 3, 4, 5];
arr1.splice(0, arr1.length);
console.log(arr1);






// Simple Way
let arr2 = [1, 2, 3, 4, 5];
arr2 = [];
console.log(arr2);