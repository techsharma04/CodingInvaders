const changeContent = () => {
  let dataChange = document.querySelectorAll("p");
  let btn = document.querySelector("button");
    dataChange.forEach((item) => {
    if(item.style.color === "red"){
      item.style.color = "black";
      btn.innerText = "I am black now"
    } else {
      item.style.color = "red";
      btn.innerText = "I am red now"
    }
  });
}