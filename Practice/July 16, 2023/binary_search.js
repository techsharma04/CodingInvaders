let medicineIds = [80, 90, 92, 96, 101, 106, 110, 116, 117, 120];

let findMedicine = (arr, key) => {
    start = 0;
    end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] === key) {
            return true;
        } else if (arr[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
    return false;
}

console.log(findMedicine(medicineIds, 120));