import React from 'react';
import ReactDOM from 'react-dom/client';
import Login from "./components/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Newtask from './components/NewTask';




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Login />} />
      <Route path="/home/:email" element={<Home />} />
      <Route path="/NewTask//:email" element={<Newtask />} />
      <Route path="/NewTask/:tasktodo/:email" element={<Newtask />} />
    </Routes>
  </BrowserRouter>
);


