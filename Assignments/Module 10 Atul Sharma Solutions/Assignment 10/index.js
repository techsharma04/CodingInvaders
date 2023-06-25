let numArray = [2, 4, 6, 5, 8, 7, 1, 9, 39, 22, 13, 40, 55];

let check = (arr, evenOdd) => {
    for (let num of arr){
        evenOdd(num);
    }
}

let evenOdd = num => {
    if(num % 2 === 0){
        console.log(`${num} is even`);
    }else {
        console.log(`${num} is odd`);
    }
}
check(numArray, evenOdd);

