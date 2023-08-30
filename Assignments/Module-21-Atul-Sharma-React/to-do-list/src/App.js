import Login from "./components/Login";
import './App.css';
import { useState } from "react";
import ToDoList from "./components/ToDoList";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NotFound from "./NotFound";

function App() {

  const [loginState, setLoginState] = useState(false);
  return (
    <div className="main-container">
      <header className="app-title">
        <h2>Todo App</h2>
      </header>
      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/todolist" element={<ToDoList />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>

    // <div className="App">
    //   { !loginState && <Login updateState = {setLoginState}/>}
    //   { loginState && <ToDoList/>}
    // </div>
  );
}

export default App;
