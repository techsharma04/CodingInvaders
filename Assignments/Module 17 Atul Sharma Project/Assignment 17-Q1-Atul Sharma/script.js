function bubbleSort(arrayValues) {
    for (let i = 0; i < arrayValues.length; i++) {
        // console.log(arrayValues[i]);
        for (let j = 0; j < arrayValues.length; j++) {
            if (arrayValues[j] > arrayValues[j + 1]) {
                let temp = arrayValues[j];
                arrayValues[j] = arrayValues[j + 1];
                arrayValues[j + 1] = temp;
            }
        }
    }
    return arrayValues;
}

console.log(bubbleSort([1500, 1200, 786, 450, 2000, 2300, 546, 780, 800, 900, 2000]));