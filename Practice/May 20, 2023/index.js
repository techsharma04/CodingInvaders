// allProducts =[
//     {
//         productName: "Shampoo",
//         quantity: 100,
//     },
// ];

// allProducts.push({productName: "Soap", quantity: "25"}, {productName: "Water Bottle", quantity: "110"}, {productName: "Laptop", quantity: "10"});
// console.log(allProducts);



// allProducts[1].quantity = 100;
// allProducts[3].quantity = 100;

// console.log(allProducts);


// let gradesTotal = 0;
// let studentData = [
//     {
//         name: "john",
//         grade: 89,
//     },
//     {
//         name: "Bob",
//         grade: 75,
//     },
//     {
//         name: "Jenny",
//         grade: 90,
//     },
//     {
//         name: "Kevin",
//         grade: 92,
//     },
//     {
//         name: "Scott",
//         grade: 95,
//     },
// ]



// for(let i=0;i<studentData.length;i++){
//     gradesTotal += studentData[i].grade;
//   }

//   console.log(gradesTotal);
//   let averageGrade = gradesTotal/studentData.length;
//   console.log(averageGrade);





// let weatherData = [20,40,25];

// //lowest temp in array
// let low = Math.min(...weatherData);
// console.log(low);

// //highest temp in array
// let high = Math.max(...weatherData);
// console.log(high);







// let postData = [
//     {
//         content: "This is post one",
//         noOfLikes: 100,
//         noOfComments: 30,
//     },
//     {
//         content: "This is post two",
//         noOfLikes: 50,
//         noOfComments: 10,
//     },
//     {
//         content: "This is post three",
//         noOfLikes: 10,
//         noOfComments: 3,
//     },
//     {
//         content: "This is post four",
//         noOfLikes: 103,
//         noOfComments: 33,
//     },
//     {
//         content: "This is post five",
//         noOfLikes: 120,
//         noOfComments: 50,
//     },
//     {
//         content: "This is post six",
//         noOfLikes: 30,
//         noOfComments: 3,
//     },
//     {
//         content: "This is post seven",
//         noOfLikes: 34,
//         noOfComments: 30,
//     },
//     {
//         content: "This is post eight",
//         noOfLikes: 200,
//         noOfComments: 60,
//     },
// ];
// postData.sort((a,b) => b.noOfLikes - a.noOfLikes);

// console.log(postData[0]);
// console.log(postData[1]);
// console.log(postData[2]);





// let students = [];
// let lastName;
// while (lastName !== "0"){
//     lastName = prompt("Enter your last name");
//     students.push(lastName);
// }

// students.pop();

// for(let i=0; i< students.length; i++){
//     console.log(`${i+1}. ${students[i]}`);
// }



// const clients = ["Kumar", "Sharma", "Patel"];
// let clientToWork = Array.from(clients);

// while (clientToWork.length !== 0){
//     curClients = clientToWork.shift();
//     let next = alert("Want to invite client?");
//     console.log(`The next client id ${curClients}`);
// }
// console.log("My Queue is empty");


// let students = [];
// let lastNames;

// while (lastNames !== "0"){
//     lastNames = prompt("Enter your last name");
//     students.push(lastNames);
// }

// students.pop();

// for (let i=0; i<students.length; i++){
//     console.log(`${i+1}. ${students[i]}`);
// }


// let moviesString = "Lords of the Rings,Avengers,Titanic,Star Wars,The Hunger Games,The Jungle Book,Inside Out";
// let movies = moviesString.split(",");
// let movInput = prompt("Enter the movie name");
// if (movies.indexOf(movInput) !== -1) {
//     console.log(`Your movie's id is ${movies.indexOf(movInput)}. Enjoy`)
// } else {
//     console.log(`The movie isn't found`)
// }


// let moviesString = "The Lord of the Rings, Avengers, Titanic, Star Wars, The Hunger Games, The Jungle Book, Inside Out";
// let movies = moviesString.split(",");

// for (const movie of movies) {
//     if(movie.length > 10) {
//         console.log(`${movie} is longer than 10 characters.`)
//     } 
// }



// let plants = [
//     ["Aloe Vera", "African Violet", "Chinese Money Plant"],
//     ["Larch", "Birch", "Oak", "Spruce", "Pine"],
//     ["Daisy", "Rose", "Tulip", "Lily", "Carnation", "Peony", "Orchid", "Sunflower"]
// ]

// for (const plant of plants) {
//     for(const items of plant){
//     if(plant.length > 7) {
//         plant.pop();
//     } else if (plant.length < 5 ) {
//         let newPlant = prompt("Enter Plant Name");
//         plant.push(newPlant);
//     }
// } 
// }
// console.log(plants);




let rand = [];

for(let i = 0; i < 10; i++)
{
    num = Math.floor(Math.random() * 10) + 1;
    rand.push(num);
    
}
console.log(rand);
let newArray = Array.from(rand);
for (const item of newArray.sort()){
    if(item > 5){
        newArray.pop();
    }
}
console.log(newArray);