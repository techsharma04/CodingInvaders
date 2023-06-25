let person = [
    {
        firstName: "John",
        lastName: "Doe",
        age: 27,
        joinedDate: "December 15, 2017"
    },
    {
        firstName: "Ana",
        lastName: "Rosy",
        age: 25,
        joinedDate: "December 15, 2019"
    },
    {
        firstName: "Zion",
        lastName: "Albert",
        age: 30,
        joinedDate: "February 15, 2011"
    }
]
let sortedPerson = person.sort((p1, p2) => (p1.age > p2.age) ? 1 : (p1.age < p2.age) ? -1 : 0);

for(let sp of sortedPerson){
    console.log(`This is ${sp.firstName} ${sp.lastName}, aged ${sp.age} joined the company on ${sp.joinedDate}`);
}
