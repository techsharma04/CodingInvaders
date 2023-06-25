// Subtask 1: Ask user to enter 1 for circle or 2 for square
let userInput = prompt("Enter 1 for circle or 2 for square");

// Subtask 2: Create switch case for circle and square
switch (userInput) {
  case "1":
    // Subtask 5: If user entered 1, ask for radius of circle and call formCircle method
    let circleRadius = parseFloat(prompt("Enter the radius of the circle"));
    formCircle(circleRadius);
    break;
  case "2":
    // Subtask 6: If user entered 2, ask for side of square and call formSquare method
    let squareSide = parseFloat(prompt("Enter the side length of the square"));
    formSquare(squareSide);
    break;
  default:
    alert("Enter a valid option");
}

// Subtask 3: Create formCircle method
function formCircle(radius) {
  let circle = {
    radius: radius,
    calculatePerimeter: function() {
      return 2 * Math.PI * this.radius;
    },
    calculateArea: function() {
      return Math.PI * Math.pow(this.radius, 2);
    }
  };

  // Call the methods inside formCircle
  let perimeter = circle.calculatePerimeter();
  let area = circle.calculateArea();

  console.log("Circle Perimeter: " + perimeter.toFixed(2));
  console.log("Circle Area: " + area.toFixed(2));
}

// Subtask 4: Create formSquare method
function formSquare(side) {
  let square = {
    side: side,
    calculatePerimeter: function() {
      return 4 * this.side;
    },
    calculateArea: function() {
      return Math.pow(this.side, 2);
    }
  };

  // Call the methods inside formSquare
  let perimeter = square.calculatePerimeter();
  let area = square.calculateArea();

  console.log("Square Perimeter: " + perimeter.toFixed(2));
  console.log("Square Area: " + area.toFixed(2));
}
