function chkDiv(num1, num2){
    if( num1 % num2 == 0){
    return "Completely divisible";    
    } else {
        return "Not divisible";
    }
}

let value1 = chkDiv(15,3);
let value2 = chkDiv(12,5);
console.log(value1);
console.log(value2);