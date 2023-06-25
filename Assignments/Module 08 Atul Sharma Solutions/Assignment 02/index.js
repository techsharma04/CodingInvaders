function volOfTheSphere(radius){
    let v  = (4/3 * Math.PI * radius ** 3);
    return alert(v.toFixed(1));
}

let volume = volOfTheSphere(prompt("Enter the radius of the sphere"));
console.log(volume);


