import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Mypage from './pages/Mypage/Mypage'; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} /> 
        <Route path="/mypage" element={<Mypage />} /> 
      </Routes>
    </Router>
  );
}

export default App;
