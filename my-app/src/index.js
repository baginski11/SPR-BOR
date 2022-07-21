import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import News from './pages/News';
import Matches from './pages/Matches';
import Team from './pages/Team'
import Teams from './pages/Teams'
import Fans from './pages/Fans'
import Youth from './pages/Youth'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes> 
      <Route path="/" element={<Home />} />
      <Route path="aktualnosci" element={<News />} />
      <Route path="mecze" element={<Matches />} />
      <Route path="zespol" element={<Team />} />
      <Route path="druzyny" element={<Teams />} />
      <Route path="mlodziez" element={<Youth />} />
      <Route path="kibice" element={<Fans />} />
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
