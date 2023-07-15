const name = document.querySelector("#cast-input-name");
const fromCity = document.querySelector("#cast-input-from-city");
const toCity = document.querySelector("#cast-input-to-city");
const bookBtn = document.querySelector("#book-btn");
const searchBtn = document.querySelector("#search-btn");

class Booking {
  constructor() {
    this.items = [];
  }

  enqueue(element) {
    return this.items.push(element);
  }

}

let busBooking = new Booking();

bookBtn.addEventListener("click", () => {
  let ticketID = Math.floor(Math.random() * 10000);
  const ticketDetails = {};
  ticketDetails.ticketID = ticketID;
  ticketDetails.userDetails = {
    name: name.value,
    fromCity: fromCity.value,
    toCity: toCity.value,
  };
  busBooking.enqueue(ticketDetails);
  name.value = "";
  toCity.value = "";
  fromCity.value = "";
  alert("Ticket Id: "+ ticketID);
  console.log(busBooking.items);
});

function searchUser(element) {
  busBooking.items.find((_, index) => {
    let id = busBooking.items[index].ticketID;
    if(element === id){
      console.log(busBooking.items[index].userDetails);
      document.getElementById("output").innerHTML = `<table><tr><th>Name:</th><td>${busBooking.items[index].userDetails.name}</td></tr><tr><th>From City:</th> <td>${busBooking.items[index].userDetails.fromCity} </td></tr><tr><th>To City: </th> <td>${busBooking.items[index].userDetails.toCity}</td></tr></table>`;
    } 
  })
}

searchBtn.addEventListener("click", () => {
  let ticketID = parseInt(document.getElementById("search-input").value);
  searchUser(ticketID);
});