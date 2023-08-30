import { useLocation } from "react-router-dom"


function ToDoList() {

    let location = useLocation();

    console.log(location);
    return(
        <div>
            <h1>This is a todolist component</h1>

        </div>
    )
    
}

export default ToDoList