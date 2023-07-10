const name = document.querySelector("#cast-input-name");
const fromCity = document.querySelector("#cast-input-from-city");
const toCity = document.querySelector("#cast-input-to-city");
const bookBtn = document.querySelector("#cast-btn");

class Booking {
  constructor(){
      this.items = [];
  }

  enqueue(element){
      return this.items.push(element);
  }

  dequeue() {
      if(this.items.length > 0) {
          return this.items.shift();
      }
      else {
          console.log("Stack is empty");
      }
  }

  front(){
      return this.items[0];
  }

   rear(){
      return this.items[this.items.length - 1];
  }

  isEmpty(){
      return this.items.length === 0;
  }

  size() {
      return this.items.length;
  }
}


let busBooking = new Booking();

let dataObj = {};

bookBtn.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 10000) + 100;
  dataObj.ticketId = r;
  dataObj.name =name.value;
  dataObj.fromCity =fromCity.value;
  dataObj.toCity =toCity.value;

  busBooking.enqueue(dataObj);

  console.log(busBooking.items);
})