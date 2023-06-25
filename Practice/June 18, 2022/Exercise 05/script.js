const fruitList = ['apple', 'banana', 'tomato'];

// Get the ul element by its id
const ulElement = document.getElementById('myList');

// Create an empty string to store the li elements
let liElements = '';

// Loop through the fruitList array
for (let i = 0; i < fruitList.length; i++) {
  // Create an li element with the current fruit
  liElements += '<li>' + fruitList[i] + '</li>';
}

// Set the innerHTML of the ul element to the li elements
ulElement.innerHTML = liElements;
