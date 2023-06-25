const myArray = [

    { id: 1, name: "A" },

    { id: 2, name: "B" },

    { id: 3, name: "C" },

    { id: 4, name: "D" },

    { id: 5, name: "E" }

];



let arrObj = {};

for(const items of myArray){
    arrObj[items.id] = items;
}

console.log(arrObj);