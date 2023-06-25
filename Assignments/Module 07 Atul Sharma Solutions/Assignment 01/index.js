let countries = [];
let country;
do{
    country = prompt("Enter country name or type 0 to exit");
   countries.push(country); 
}
while (country !== "0");
console.log(`Wow! There are coins from ${countries.length -1 } countries in this collection:`);

for(let i = 0; i<countries.length-1; i++){
    console.log(countries[i]);
}




