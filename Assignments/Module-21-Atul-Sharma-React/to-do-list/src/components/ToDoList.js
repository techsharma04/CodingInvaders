import { useNavigate } from "react-router-dom"
import "./todolist.css"

function ToDoList() {
    let navigate = useNavigate();
    function logout() {
        navigate("/login", true);
    }


    return (
        <div>
            <div className="msgbtn">
                <h3>Login Successfull...</h3>
                <button onClick={logout}>Signout</button>
            </div>
            <br/>
            <br/>
            <h1>Welcome to the todolist components.</h1>

        </div>
    )

}

export default ToDoList