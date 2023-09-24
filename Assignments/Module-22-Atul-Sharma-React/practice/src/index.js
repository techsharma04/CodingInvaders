import React from 'react';
import ReactDOM from 'react-dom/client';
import TopHeader from './components/TopHeader';
import Details from './components/Details';
import { BrowserRouter, Route, Routes } from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<TopHeader/>} />
      <Route path='/details/:title' element={<Details/>} />
    </Routes>
  </BrowserRouter>
);


