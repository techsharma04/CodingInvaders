let keyInput = document.querySelector("#key-input");
let btn = document.querySelector("button");
let keyIds = [10, 12, 15, 19, 24, 28, 30, 45, 50, 65, 77, 99]; 

btn.addEventListener("click", () => {
    inpId = Number(keyInput.value);
    let output = findPosition(keyIds, inpId);
    let result;
    if(output !== undefined){
        result =  `For the product id ${keyInput.value}. \nThe position of the product is ${output}.`;

    } else {
        result = `This product is Out of Stock`;
    }
    console.log(result);
    document.getElementById("msg").innerText = result;
})


let findPosition = (arr, key) => {
    start = 0;
    end = arr.length - 1;
    while (start <= end) {
        let middle = Math.floor((start + end) / 2);
        if (arr[middle] === key) {
            return middle;
        } else if (arr[middle] < key) {
            start = middle + 1;
        } else {
            end = middle - 1;
        }
    }
}


