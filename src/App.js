import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import News from './pages/News';
import Matches from './pages/Matches';
import Team from './pages/Team'
import Teams from './pages/Teams'
import Fans from './pages/Fans'
import Youth from './pages/Youth'





export default function App() {
  return (
    <div>
          <BrowserRouter>
              <Routes> 
                <Route path="/" element={<Home />} />
                <Route path="/home" element={<Home />} />
                <Route path="/aktualnosci" element={<News />} />
                <Route path="/mecze" element={<Matches />} />
                <Route path="/zespol" element={<Team />} />
                <Route path="/druzyny" element={<Teams />} />
                <Route path="/mlodziez" element={<Youth />} />
                <Route path="/kibice" element={<Fans />} />
              </Routes>
            </BrowserRouter>
    </div>

  );
}
