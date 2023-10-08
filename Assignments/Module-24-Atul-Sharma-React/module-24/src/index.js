import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from './App';
import AssignmentFirst from './components/AssignmentFirst';
import AssignmentSecond from './components/AssignmentSecond';
import AssignmentThird from './components/AssignmentThird';
import AssignmentFourth from './components/AssignmentFourth';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
    <Route path='/' element={<App />} />
      <Route path='/assignment1' element={<AssignmentFirst/>} />
      <Route path='/assignment2' element={<AssignmentSecond/>} />
      <Route path='/assignment3' element={<AssignmentThird/>} />
      <Route path='/assignment4' element={<AssignmentFourth/>} />
    </Routes>
  </BrowserRouter>
);


