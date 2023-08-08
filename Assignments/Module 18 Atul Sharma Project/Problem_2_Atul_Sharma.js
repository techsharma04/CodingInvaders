const array = [5, 1, 22, 25, 6, -1, 8, 10];

const sequence = [1, 6, -1, 10];

function isSubsequence(array, sequence) {
    let seq = 0;
   for(let i=0; i < array.length && seq < sequence.length; i++){
    if(array[i] === sequence[seq]){
            seq++;
        } 
    }
    return seq === sequence.length;
 }

const result = isSubsequence(array, sequence);
console.log(result); // This will output true for the given sample input


