function searchDuplicate(arr) {
    let newArray = new Set();

    for (let i = 0; i < arr.length; i++) {
        if(newArray.has(arr[i])){
            return `The duplicate number is ${arr[i]}, and it's position in the list is ${i} with index of ${arr.indexOf(arr[i])}`;
        }
        newArray.add(arr[i]);
    }
    return null;
}



let array = [];
let num = 0;
for (let i = 0; i < 20; i++) {
        num = Math.floor(Math.random() * 20);
        array.push(num);
    
}
console.log(array);
let output = searchDuplicate(array);
console.log(output);