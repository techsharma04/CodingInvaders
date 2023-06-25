
let numArray = [];
for (let i = 0; i < 10; i++) {
    let num = Math.floor(Math.random() * 100);
    numArray.push(num);

}
numArray.sort();
console.log(numArray);
numArray.reverse();
console.log(numArray);