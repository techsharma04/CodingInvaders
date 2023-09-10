import Login from "./components/Login";
import './App.css';
// import { useState } from "react";
import ToDoList from "./components/ToDoList";
import { BrowserRouter, Routes, Route} from "react-router-dom";
import NotFound from "./NotFound";
import InvalidAccess from "./components/InvalidAccess";


function App() {

  // const [loginState, setLoginState] = useState(false);
  return (
    <div className="main-container">
      <header className="app-title">
        <h2>Todo App</h2>
      </header>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/invalidAccess" element={<InvalidAccess />} />
        </Routes>
      </BrowserRouter>
    </div>

    // <div className="App">
    //   { !loginState && <Login updateState = {setLoginState}/>}
    //   { loginState && <ToDoList/>}
    // </div>
  );
}

export default App;
