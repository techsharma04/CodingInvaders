const updateRowsData = () => {
  let dataChange = document.querySelectorAll(".cell-1");
    dataChange.forEach((item) => {
    item.innerText = "Data changed";
  });
}