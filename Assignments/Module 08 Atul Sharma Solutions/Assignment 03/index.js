function findMinNumber(num1, num2){
    if(num1 < num2){
        return num1;
    } else {
        return num2;
    }
}

console.log(findMinNumber(4, 9));






// Using in-built Javascript Method

function findMinNumber(num1, num2){
    return Math.min(num1, num2);
}

console.log(findMinNumber(4, 9));