const array = [2, 1, 2, 2, 2, 3, 4, 2];

const move=2;

function moveElements(array) {
    
    array.sort((a, b) => {
        if (a === move && b !== move) {
            return 1;  
        } else if (a !== move && b === move) {
            return -1; 
        } else {
            return 0;  
        }
    });

    return array;
}

console.log(moveElements(array));



