let totalProducts = parseInt(prompt("Enter the number of products"));
let arrProducts = [];

for(let i=0; i < totalProducts; i++){
    item = prompt("Enter the name of the product");
    quantity = parseInt(prompt("Enter the quantity of the product"));
    arrProducts.push({name : item, quantity: quantity});
}
arrProducts.forEach(function(product){
    console.log(product.name + ":" + product.quantity);
});