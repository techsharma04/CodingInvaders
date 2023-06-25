const changeContent = () => {
  let para = document.querySelectorAll(".para");
  for (let i = 0; i < para.length; i++) {
    if (i % 2 === 0) {
      para[i].style.color = "red";
    } else {
      para[i].style.color = "green";
    }
  }
};
