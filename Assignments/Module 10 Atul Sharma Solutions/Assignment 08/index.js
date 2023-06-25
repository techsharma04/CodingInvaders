// One way
let arr =  [1, 2, 3, 4, 5];

let duplicateArray = arr => {
    return arr.slice();
}
let dArray = duplicateArray(arr);
console.log(dArray);



// another way
let res = arr.map((e) => {
    return e;
})