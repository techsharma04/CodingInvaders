let num = parseInt(window.prompt("Please enter any number between 0 - 100"));
if(num < 0 && num > 100){
    alert("The number is not in the [0, 100] interval.");
}else {
    num = num + 1;
let i = 1;
while(i < num){
    console.log(i);
    i++;
}
}