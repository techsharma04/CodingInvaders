let carManufacturers = ['audi', 'BMw', 'ForD', 'mG', 'tata', 'MAHINDRA'];

function cars(manufacturers){
    let cars = {
        allLowerCase :[],
        allUpperCase :[]
    }
carManufacturers.forEach(e => {
    cars.allLowerCase.push(e.toLowerCase());
    cars.allUpperCase.push(e.toUpperCase());
});


return cars;
}

console.log(cars(carManufacturers));