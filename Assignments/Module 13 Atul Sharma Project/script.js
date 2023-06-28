let btnAdd = document.getElementById("btn-add");
let btnPriority = document.getElementById("btn-priority");
let btnDeleteAll = document.getElementById("btn-delete-all");
let listInput = document.getElementById("list-input");
let list = document.querySelector(".list");

// Add button click event
btnAdd.addEventListener("click", () => {
    if (listInput.value) {
        toDoList(listInput.value, false);
        listInput.value = "";
    }
});

// priority button click event
btnPriority.addEventListener("click", () => {
    if (listInput.value) {
        toDoList(listInput.value, true);
        listInput.value = "";
    }
});

// Delete all tasks button click event
btnDeleteAll.addEventListener("click", () => {
    list.innerHTML = "";
});


// function to make list and organize according to priority
let toDoList = (items, isPrior) => {

    // <div> tag creation and injection inside <ul>
    let div = document.createElement("div");
    list.appendChild(div);

    // <li> tag creation and injection inside <div>
    let li = document.createElement("li");
    div.appendChild(li);

    // Complete button creation and injection inside <div>
    let completeButton = document.createElement("button");
    div.appendChild(completeButton);

    // Delete button creation and injection inside <div>
    let deleteButton = document.createElement("button");
    div.appendChild(deleteButton);

    // setting up the priority sequence
    if (isPrior === true) {
        list.prepend(div);
    } else {
        list.appendChild(div);
    }

    //<div> tag css
    div.setAttribute("class", "todo");
    div.classList.add("class", "list-style");

    // <li> tag css
    li.setAttribute("class", "todoItem");
    li.textContent = items;
    li.classList.add("class", "li-text");

    // Complete button css
    completeButton.setAttribute("class", "complete-btn");
    completeButton.textContent = "Completed";
    completeButton.classList.add("class", "btn");
    completeButton.classList.add("class", "btn-complete");

    // Delete button css
    deleteButton.setAttribute("class", "delete-btn");
    deleteButton.textContent = "Delete";
    deleteButton.classList.add("class", "btn");
    deleteButton.classList.add("class", "btn-delete");

    // Complete button click event
    completeButton.addEventListener("click", () => {
        completeButton.parentElement.style.opacity = 0.3;
    });

    // Delete button click event
    deleteButton.addEventListener("click", () => {
        completeButton.parentElement.remove();
    });
}



