let taste = prompt("Please tell us your taste..!!!");
let people = prompt("For how many people..?");
let size;

if(taste == "Chocolate"){
    taste = "Chocolate Dream";
} else if(taste == "Berries and fruits"){
    taste = "Tropic Pleasure";
} else if(taste == "Nuts"){
    taste = "Cupcake Set";
} else if(taste == "Cheesecake"){
    taste = "Creamy Cheesecake";
} else{
    taste = "Cupcake Set";
}

if(people >= 6){
    size = "Large"
} else if(people >= 3 && people <= 5) {
    size = "Medium"
} else {
    size = "Small"
}

console.log(size +" "+ taste);

