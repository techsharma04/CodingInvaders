let btn = document.querySelector("button");
let box = document.querySelector("#colored");
let pNode = document.getElementById("list");

btn.addEventListener('click', () => {
    var styles = getComputedStyle(box);
    for(let items of styles){
        let x = items;
        let y = styles.getPropertyValue(x);
        let list = document.createElement("li");
        list.innerHTML = `${x} : ${y}`;
        pNode.appendChild(list);
    }
})
