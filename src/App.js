import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ToolBar from "./components/ToolBar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Mypage from "./pages/Mypage/Mypage";
import New from "./pages/ProductPage/New";
import Perfume from "./pages/ProductPage/Perfume";
import Diffuser from "./pages/ProductPage/Diffuser";

function App() {
  return (
    <Router>
      <Header />
      <ToolBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/mypage" element={<Mypage />} />
        <Route path="/new" element={<New />} />
        <Route path="/perfume" element={<Perfume />} />
        <Route path="/diffuser" element={<Diffuser />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
