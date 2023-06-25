function user(input){
    let [name, age, roomNumber] = input.split(',');
    


let person = {
    name : name,
    age: age,
    roomNumber: roomNumber,
    intro: function(){
        return `I am ${person.name}, aged ${person.age}, living in room ${person.roomNumber}`;
    }
}
    return person;
}
let pObj = user("Atul,31,111");
console.log(pObj.intro());
