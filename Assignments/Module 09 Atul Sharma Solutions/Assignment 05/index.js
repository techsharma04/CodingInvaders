let cartItems = {
    shampoo: {
        quantity: 5,
        price: 278
    },
    butter: {
        quantity: 4,
        price: 80
    },
    oil: {
        quantity: 2,
        price: 142
    }
 };


let total = 0;
for(let item in cartItems){
        let subtotal = cartItems[item].quantity * cartItems[item].price; 
        total += subtotal;
    }
    console.log("Total cart value is " + total);



