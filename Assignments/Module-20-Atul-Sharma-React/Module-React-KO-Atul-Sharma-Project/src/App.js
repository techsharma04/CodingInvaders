import Login from "./Login";
import './App.css';
import { useState } from "react";
import ToDoList from "./ToDoList";

function App() {

  const [loginState, setLoginState] = useState(false);
  return (
    <div className="App">
      { !loginState && <Login updateState = {setLoginState}/>}
      { loginState && <ToDoList/>}
    </div>
  );
}

export default App;
