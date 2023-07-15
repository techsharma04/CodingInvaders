class Booking {
    constructor() {
        this.items = [];
    }

    enqueue(element) {
        return this.items.push(element);
    }

    searchUser(element) {
        this.items.find((_, index) => {
            let id = this.items[index].ticketID;
            element = Number(element);
            if(id === element){
                console.log(`Name: ${this.items[index].userDetails.name}`);
                console.log(`From City: ${this.items[index].userDetails.fromCity}`);
                console.log(`To City: ${this.items[index].userDetails.toCity}`);
            }
          })
          promptBox1();
    }

}


let busBooking = new Booking();





function promptBox1() {
    const promptOptions1 = Number(prompt(`Please enter one of the provided options to proceed.. \n\n 1. Book Ticket \n 2. Search User`));
    if (promptOptions1 === 1) {
        promptBox2();
    } else if (promptOptions1 === 2) {
        const value = prompt("Enter the ticket id to search the user details.")
        busBooking.searchUser(value);
    } else {
        alert("Not a valid input. Please write the provided numbers only.");
        promptBox1();
    }
}

function promptBox2() {
    let ticketID = Math.floor(Math.random() * 10000);
    let name, fromCity, toCity;
    name = prompt("Name:").trim();
    fromCity = prompt("From:").trim();
    toCity = prompt("To:").trim();
    if (name !== "" && fromCity !== "" && toCity !== "") {
        const ticketDetails = {};
        ticketDetails.ticketID = ticketID;
        ticketDetails.userDetails = {
            name: name,
            fromCity: fromCity,
            toCity: toCity,
        };
        busBooking.enqueue(ticketDetails);
        alert("Ticket Id: " + ticketID);
        console.log(busBooking.items[busBooking.items.length - 1]);
        promptBox1();
    } else {
        console.log("All fields are mandatory to fill.");
        promptBox2();
    }

}

