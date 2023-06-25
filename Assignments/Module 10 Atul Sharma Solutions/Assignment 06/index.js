let arr = [1, 2, 3, 4, 5];


let updateArray = (a, func) => {
    console.log("Old Array", a);
    func(arr);
    console.log("New Array", arr);

}

function newFunc(arr){
    arr.reverse();
    
}

let res = updateArray(arr, newFunc);
