function insertionSort(arrayValues) {
    for (let i = 1; i < arrayValues.length; i++) {
        let currentValue = arrayValues[i];
        let j;
        for (j = i - 1; j >= 0 && arrayValues[j] > currentValue; j--) {
            arrayValues[j + 1] = arrayValues[j]
        }
        arrayValues[j + 1] = currentValue
    }
    return arrayValues;
}

console.log(insertionSort([67, 60, 58, 75, 53, 71, 63, 52, 53, 59, 57, 59, 63, 76, 53]));