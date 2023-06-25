const guests = [

    ["001", "Johnson", "Table 2"],

    ["002", "Nisha", "Table 10"],

    ["003", "Vasav", "Table 1"],

    ["004", "Uddin", "Table 7"]

]

let inp = prompt("Enter your Id or Surname");

for (let guest of guests) {
    if (guest[0] === inp || guest[1] === inp) {
        alert(`Welcome to the ${guest[2]}`);
        let index = guests.indexOf(guest);
        guests.splice(index, 1);
    }
}
console.log(guests);





