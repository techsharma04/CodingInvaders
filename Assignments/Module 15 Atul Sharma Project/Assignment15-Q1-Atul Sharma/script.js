const cartButtons = document.querySelectorAll(".product-cart-btn");
const alertBox = document.getElementById("alert-box");
const btnArray = Array.from(cartButtons);

class Orders {
  constructor() {
    this.products = [];
  }

  add(element) {
    return this.products.push(element);

  }

  top() {
    if (this.products.length > 0) {
      return `"${this.products[this.products.length - 1]}" is at the top of the stack`;

    } else {
      return `Oooppssss...! You've got nothing. \n Stack is empty`;
    }
  }

  remove() {
    document.getElementById("cart").classList.add("cart-container");
    let unorderedList = document.createElement("ul");
    document.querySelector(".cart-container").appendChild(unorderedList);
    let removedProducts = [];

    Object.keys(this.products).reverse().forEach((index) => {
      // console.log(this.products[index]);
      let list = document.createElement("li");
      unorderedList.appendChild(list);
      list.classList.add("id", "cart-items");
      list.innerText = this.products[index];
      document.getElementById("counter").innerText = this.products.length - 1;
      removedProducts.push(this.products.pop());
    });
    return removedProducts;
  }


  size() {
    return this.products.length - 1;
  }
}



let myStack = new Orders();


btnArray.forEach((btn) => {
  btn.addEventListener("click", () => {
    let item = btn.getAttribute("id");
    let prod = document.getElementsByClassName(item);
    for (let p of prod) {
      item = p.innerHTML;
      myStack.add(item);
      alertBox.style.visibility = "visible";
      document.getElementById("alert-boxp").textContent = myStack.products;
      console.log("Added Products: " + document.getElementById("alert-boxp").textContent);
    }
    document.getElementById("counter").innerText = myStack.products.length;
  });
})


function vanishAlertBox() {
  alertBox.style.visibility = "hidden";
}
function checkTop() {
  alertBox.style.visibility = "visible";
  document.getElementById("alert-boxp").innerText = `${myStack.top()}`;
  console.log(myStack.top());
}

function removeAll() {
  let dispayRemoved = myStack.remove();
  alertBox.style.visibility = "visible";
  document.getElementById("alert-boxp").innerText = `${dispayRemoved} \n\n Above products have been removed from the cart. \n and displaying in the checkout tab on the right side`;
  console.log(dispayRemoved);
}

function checkSize() {
  alertBox.style.visibility = "visible";
  document.getElementById("alert-boxp").innerText = `Index of the array starts from 0, So (length - 1) is applied here to get the exact size. \n \n Size of the array is ${myStack.size()}`;
  console.log(`Index of the array starts from 0, So (length - 1) is applied here to get the exact size. \n \n Size of the array is ${myStack.size()}`);
}

