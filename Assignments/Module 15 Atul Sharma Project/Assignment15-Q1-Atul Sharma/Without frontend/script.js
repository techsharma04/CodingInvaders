
class Orders {
  constructor() {
    this.products = [];
  }

  add(element) {
    if (!this.products.includes(element)) {
      this.products.push(element);
      return true;
    } else {
      return false;
    }

  }

  top() {
      return `"${this.products[this.products.length - 1]}" is at the top of the stack`;
  }

  remove() {
    return `${this.products.pop()} is removed from the stack.`;
  }

  size() {
    return this.products.length - 1;
  }
}



let myStack = new Orders();

function promptBox1() {
  const promptOptions1 = Number(prompt(`Please enter one of the provided options to proceed.. \n\n 1. Add products to cart \n 2. Checkout`));
  if (promptOptions1 === 1) {
    promptBox2();
  } else if (promptOptions1 === 2) {
    checkOut();
  } else {
    alert("Not a valid input. Please write the provided numbers only.");
    promptBox1();
  }
}

function promptBox2() {
  const promptOptions2 = Number(prompt(`1. Xbox Series X Console \n2. Nintendo Switch Console \n3. Playstation 5 Console \n4. Xbox Series Controller \n5. Nintendo Switch Controller \n6. Play Station 5 Controller \n7. Proceed to Checkout`));
  if (promptOptions2 > 0 && promptOptions2 < 8) {
    switchFunction(promptOptions2);
  } else {
    alert("Not a valid input. Please write the provided numbers only.");
    promptBox2();
  }
}

function switchFunction(element) {
  let arrValue;
  switch (element) {
    case 1:
      arrValue = myStack.add("Xbox Series X Console");
      break;
    case 2:
      arrValue = myStack.add("Nintendo Switch Console");
      break;
    case 3:
      arrValue = myStack.add("Playstation 5 Console");
      break;
    case 4:
      arrValue = myStack.add("Xbox Series Controller");
      break;
    case 5:
      arrValue = myStack.add("Nintendo Switch Controller");
      break;
    case 6:
      arrValue = myStack.add("Play Station 5 Controller");
      break;
    case 7:
      checkOut();
      break;
  }
  if (arrValue === false) {
    alert("This product is already in the cart.")
    promptBox2();
  } else if (arrValue === true) {
    console.log(myStack.top());
    console.log(myStack.products);
    confirmBox();
  }

}



function confirmBox() {
  const confirmValue = confirm("Do you want to add more products to the cart");
  if (confirmValue === true) {
    promptBox2();
  } else {
    checkOut();
  }
}


function checkOut() {
  do { 
    console.log(myStack.remove());
    if(myStack.products.length > 0 ){
    console.log(myStack.products[myStack.products.length - 1] + " is at the top of the stack now...");
    } else {
      console.log("Stack is empty now...");
    }
  } 
  while (myStack.products.length > 0)
  
}

