const cartButtons = document.querySelectorAll(".product-cart-btn");
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
      alert(this.products[this.products.length - 1]);
    } else {
      alert("stack is empty");
    }
  }

  remove() {

    for (let i = this.products.length; i > 0; i--) {
      document.getElementById("counter").innerText = myStack.products.length - 1;
      this.products.pop();
    }
    // document.getElementById("cart").classList.add("cart-container");
    // let list = document.createElement("ul");
    // document.querySelector(".cart-container").appendChild(list);
    // let li = document.createElement("li");
    // list.appendChild(li);
    // li.classList.add("id", "cart-items");
    // li.innerText = item;
  }
  size() {
    alert(this.products.length);
}
}



let myStack = new Orders();

for (let btn of btnArray) {
  btn.addEventListener("click", () => {
    let item = btn.getAttribute("id");
    let prod = document.getElementsByClassName(item);
    for (let p of prod) {
      item = p.innerHTML;
      myStack.add(item);
    }
    document.getElementById("counter").innerText = myStack.products.length;
  });
}

function checkTop() {
  myStack.top();
}

function checkEmpty() {
  myStack.remove();
}

function checkSize() {
    myStack.size();
}


