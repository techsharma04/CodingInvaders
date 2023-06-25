function addNum(x, y){
    return x + y();
}

function newFunc(){
    return 10;
}

let res = addNum(7, newFunc);
console.log(res);
