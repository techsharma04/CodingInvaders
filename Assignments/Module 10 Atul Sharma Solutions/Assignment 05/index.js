let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let res = arr.reduce((sum, items) => {
    return sum += items; 
})
console.log(res);