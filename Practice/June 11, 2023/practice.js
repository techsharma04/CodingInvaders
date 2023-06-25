// function num(num1, num2 = 10){
//     return num1 * num2;
// }
// console.log(num(5, 4));
// console.log(num(5));

// const evenNumber = (limit = 100) => {
//     for(let i=1; i<= limit; i++){
//         if(i%2 === 0){
//         console.log(i);
//     }
//     }
// }
// evenNumber(20)
// evenNumber();

// function evenNumber(limit = 100) {
//     let i= 1;
//     while(i <= limit){
//         if(i%2 === 0){
//         console.log(i);
//     }
//     i++;
//     }
// }
// evenNumber(20)
// evenNumber();

// const evenNumber = (...numbers) => {
//     numbers.forEach((item) => {
//         if(item%2 === 0) {
//             console.log(item);
//         }
//     });
// }
// evenNumber(1,2,3,4,5,6,7,8,9,10,11,53,54,58,59,6611,15,26,48,55);

// const sortNumber = (...numbers) => {
//     let sortedNumber = numbers.sort((a,b)=>a-b);
//     console.log(sortedNumber);
// }
// sortNumber(1,2,3,4,5,6,7,8,9,10,11,53,54,58,59,6611,15,26,48,55);

// function concat2Arrays(parm1, parm2) {
//     let res = [...parm1, ...parm2];
//     console.log(res);
// }
// const fruits = ["Apple", "Mango", "Orange"];
// const price = [25, 65, 100];
// concat2Arrays(fruits, price);

// const user = {
//     id: 1, name: "Atul", phone: "647-514-8664"
// }
// const clonedUser = (user) => {
//     const res = {...user};
//     return res;
// };
// console.log(clonedUser(user));

// function newFunc(...values){
//     console.log(arguments.length);
//     let res = 0;
//     values.forEach(item => res += item);
//     console.log(res);
// }

// newFunc(1,2,3,4,5,6,7,8,9);

// function user(id, name) {
//   const user = {
//     id: id,
//     name: name, 
//     ["name"+id]: name,
//   };
//   console.log(user);
// }

// user(12, "Atul");


// function carOddEVen(name, vehicleNo){
//     const car = {
//         name: name,
//         vehicleNo: vehicleNo,
//         [vehicleNo%2==0 ? "driveOnEvenDays" : "driveOnOddDays"] : true
//     }
//     console.log(car);
// }
// carOddEVen("tata", 7584);
// carOddEVen("Mahindra", 7585);




// function arrNum(...numbers){
//     const [num1, num2, num3] = numbers;
//     console.log(num1, num3);
// }

// arrNum(1,5,3,9,7);



// function arrNum(...numbers){
//     const [num1 = 10, num2 = 20, num3 = 30] = numbers;
//     console.log(num1, num2, num3);
// }

// arrNum(1,2,3);
// arrNum();



const user = {
    id: 1,
    name: "Atul",
    address: "Brampton, Ontario, Canada",
    userAddress(){
        return this.address;
    }
}
console.log(user.userAddress());