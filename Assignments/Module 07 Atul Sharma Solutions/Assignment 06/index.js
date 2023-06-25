// BY USING FOR OF LOOP

const goods = [

    ["Apples", "fruit"],

    ["Milk 3.2%", "dairy products"],

    ["Potato", "vegetables"],

    ["Brinjal", "vegetables"],

    ["Mango", "fruit"],

    ["Cheese", "dairy products"]

]

//create 3 arrays to store 3 category items
let fruitBasket = [];
let dairyBasket = [];
let vegBasket = [];


for (let good of goods) {
    if (good[1] === "fruit") {
        fruitBasket.push(good[0]);
    } else if (good[1] === "dairy products") {
        dairyBasket.push(good[0]);
    } else if (good[1] === "vegetables") {
        vegBasket.push(good[0]);
    }
}


//fruit category
for (let i = 0; i < fruitBasket.length; i++) {
    if (i === 0) { console.log(`FRUIT`) };
    console.log(fruitBasket[i]);
}
//dairy category
for (let j = 0; j < dairyBasket.length; j++) {
    if (j === 0) { console.log(`\nDAIRY PRODUCTS`) };
    console.log(dairyBasket[j]);
}
//vegetables category
for (let k = 0; k < vegBasket.length; k++) {
    if (k === 0) { console.log(`\nVEGETABLES`) };
    console.log(vegBasket[k]);
}



// BY USING FOR LOOP ONLY


// const goods = [

//     ["Apples", "fruit"],

//     ["Milk 3.2%", "dairy products"],

//     ["Potato", "vegetables"],

//     ["Brinjal", "vegetables"],

//     ["Mango", "fruit"],

//     ["Cheese", "dairy products"]

// ]

// // create array for storing products
// let fruitbasket = []
// let dairybasket = []
// let vegetablebasket = []

// for (let i = 0; i < goods.length; i++) {
//     if (goods[i][1] === "fruit") {
//         fruitbasket.push(goods[i][0])
//     }
//     else if (goods[i][1] === "dairy products") {
//         dairybasket.push(goods[i][0])
//     }
//     else if (goods[i][1] === "vegetables") {
//         vegetablebasket.push(goods[i][0])
//     }
// }

// for (i = 0; i < fruitbasket.length; i++) {
//     if (i === 0) { console.log("FRUIT") }

//     console.log(`${fruitbasket[i]}`)
// }
// for (j = 0; j < dairybasket.length; j++) {
//     if (j === 0) { console.log(`\nDAIRY PRODUCTS`) }

//     console.log(`${dairybasket[j]}`)
// }
// for (k = 0; k < vegetablebasket.length; k++) {
//     if (k === 0) { console.log(`\nVEGETABLES`) }

//     console.log(`${fruitbasket[k]}`)
// }