function missingNumber(arr){

    let missingNumber, missingPosition;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] !== i+1){
            missingNumber = i + 1;
            missingPosition = i;
            break;
        }
    }
    return {missingPosition, missingNumber};
}

const array = [1,2,3,4,6,7,8,9,10];
let result = missingNumber(array);
console.log(result);