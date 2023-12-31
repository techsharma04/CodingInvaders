// Exercise 1: User Validation
// Write a function called validateUser that takes an object representing a user and validates its properties. The user object should have the following properties: name (a string), age (a number), and email (a string). The function should return true if all properties are valid and false otherwise.
// - name, email and age must the correct data types
// - name and email should not be empty
// - age should not be more than 120



















// Exercise 2: Filtering Data
// Write a function called filterProducts that takes an array of products and a maximum price as arguments. Each product is represented by an object with properties name (a string) and price (a number). The function should return a new array containing only the products whose price is less than or equal to the maximum price.

// const products = [
//     { name: "Product 1", price: 10 },
//     { name: "Product 2", price: 20 },
//     { name: "Product 3", price: 30 },
//     { name: "Product 4", price: 40 },
//   ];

//   let newArrr = []
//   function filteredProducts(arr){
//     arr.forEach(element => {
//         if(element.price <= 25)
//         {
//             newArrr.push(element)
//         }
        
//     });
// console.log(newArrr)  
// }
// filteredProducts(products)


// function filterProducts(array,maxPrice){
//     return array.filter((each) => each.price<=maxPrice)
// }












// Exercise 3: Pagination
// Write a function called paginate that takes an array of items and a page number as arguments. The function should return a new array containing the items that belong to the specified page. Each page should contain a maximum of 10 items.

// const items = Array.from({ length: 50 }, (_, index) => index + 1);

// console.log(paginate(items, 1)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(paginate(items, 3)); // Output: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]


// function paginate(items, pageNumber) {
//   let sIndex = (pageNumber - 1) * 10;
//   let eIndex = sIndex + 10;
//   return items.slice(sIndex, eIndex);
// }
// let items = Array.from({ length: 50 }, (_, index) => index + 1);
// console.log(paginate(items, 1));
// console.log(paginate(items, 3));

// ----------------

// function pagination(array,pageNum){
//     let newArray = []
//     let index = pageNum*10-10
//     while(index<(pageNum*10)){
//         newArray.push(array[index])
//         index++
//     }
//     return newArray
// }
// const items = Array.from({ length: 50 }, (_, index) => index + 1);
// console.log(pagination(items,1))
// console.log(pagination(items,3))








// Exercise 4: Remove duplicates
// An e-commerce website allows users to add items to their shopping cart. However, due to various interactions, duplicate items may be added to the cart. To provide a better user experience, you want to remove duplicates from the cart before displaying the final list of items. Write a function called removeDuplicates that takes an array of numbers and returns a new array with duplicates removed.

// let cart = [1,4,6,4,1]

// const products = [
//   {
//     id: 1,
//     name: "Wireless Bluetooth Earphones",
//     price: 29.99,
//     category: "Electronics",
//     brand: "SoundBlast",
//   },
//   {
//     id: 2,
//     name: "Smart Fitness Tracker",
//     price: 49.99,
//     category: "Fitness",
//     brand: "FitTech",
//   },
//   {
//     id: 3,
//     name: "Leather Messenger Bag",
//     price: 79.99,
//     category: "Fashion",
//     brand: "UrbanStyle",
//   },
//   {
//     id: 4,
//     name: "Portable Power Bank",
//     price: 39.99,
//     category: "Electronics",
//     brand: "PowerUP",
//   },
//   {
//     id: 5,
//     name: "Stainless Steel Water Bottle",
//     price: 19.99,
//     category: "Kitchen",
//     brand: "HydroFlow",
//   },
//   {
//     id: 6,
//     name: "Men's Classic Wrist Watch",
//     price: 99.99,
//     category: "Fashion",
//     brand: "TimeMaster",
//   },
//   {
//     id: 7,
//     name: "Professional DSLR Camera",
//     price: 899.99,
//     category: "Electronics",
//     brand: "CapturePro",
//   },
//   {
//     id: 8,
//     name: "Organic Green Tea",
//     price: 9.99,
//     category: "Food & Beverage",
//     brand: "Nature's Brew",
//   },
//   {
//     id: 9,
//     name: "Premium Leather Wallet",
//     price: 59.99,
//     category: "Fashion",
//     brand: "LuxuryCraft",
//   },
//   {
//     id: 10,
//     name: "Wireless Gaming Mouse",
//     price: 39.99,
//     category: "Gaming",
//     brand: "GamePro",
//   },
// ];


// function removeDuplicates(products){
//     let array = []
//     for(let i=0; i<products.length;i++){
//         if(!array.includes(products[i].id)){
//             array.push(products[i].id)
//         }
//     }
//     return array
// }
// console.log(removeDuplicates(products))









// Exercise 5: Count properties
// In a customer relationship management (CRM) system, you have a customer object that stores various details such as name, email, phone number, and address. You want to determine the number of properties associated with each customer to ensure all necessary information is present. Write a function called countProperties that takes an object as an argument and returns the number of properties it has.

// const customer = {
//   name: "John Doe",
//   email: "john@example.com",
//   phone: "123456789",
//   address: "123 Main St",
// }; 

// let keysOfObject = Object.keys(customer).length


















// Solutions : 
// -----------------------
// 1.

// function validateUser(user) {
//   if (
//     typeof user.name === "string" &&
//     typeof user.age === "number" &&
//     typeof user.email === "string"
//   ) {
//     // Additional validation logic can be added here
//     return true;
//   }
//   return false;
// }

// // Example usage:
// const user1 = { name: "John", age: 25, email: "john@example.com" };
// console.log(validateUser(user1)); // Output: true

// const user2 = { name: "Jane", age: "30", email: "jane@example.com" };
// console.log(validateUser(user2)); // Output: false

// 2. 

// function filterProducts(products, maxPrice) {
//   return products.filter(product => product.price <= maxPrice);
// }

// // Example usage:
// const products = [
//   { name: "Product 1", price: 10 },
//   { name: "Product 2", price: 20 },
//   { name: "Product 3", price: 30 },
//   { name: "Product 4", price: 40 },
// ];

// const filteredProducts = filterProducts(products, 25);
// console.log(filteredProducts);
// // Output: [
// //   { name: "Product 1", price: 10 },
// //   { name: "Product 2", price: 20 }
// // ]

// 3.

// function paginate(items, pageNumber) {
//   const startIndex = (pageNumber - 1) * 10;
//   const endIndex = startIndex + 10;
//   return items.slice(startIndex, endIndex);
// }

// // Example usage:
// const items = Array.from({ length: 50 }, (_, index) => index + 1);

// console.log(paginate(items, 1)); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// console.log(paginate(items, 3)); // Output: [21, 22, 23, 24, 25, 26, 27, 28, 29, 30]


// 4. 

function removeDuplicates(numbers) {
  const uniqueNumbers = [];
  
  for (let i = 0; i < numbers.length; i++) {
    if (!uniqueNumbers.includes(numbers[i])) {
      uniqueNumbers.push(numbers[i]);
    }
  }
  
  return uniqueNumbers;
}

// // Example usage:
// const numbers = [1, 2, 3, 3, 4, 5, 5];
// console.log(removeDuplicates(numbers)); // Output: [1, 2, 3, 4, 5]


// 5.

// function countProperties(customer) {
//   return Object.keys(customer).length;
// }

// // Example usage:
// const customer = {
//   name: "John Doe",
//   email: "john@example.com",
//   phone: "123456789",
//   address: "123 Main St",
// };
// console.log(countProperties(customer));
// // Output: 4