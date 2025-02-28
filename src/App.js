import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { CookiesProvider } from "react-cookie";
import Header from "./components/Header";
import ToolBar from "./components/ToolBar";
import Footer from "./components/Footer";
import Home from "./pages/Home/Home";
import Mypage from "./pages/Mypage/Mypage";
import New from "./pages/ProductPage/New";
import Perfume from "./pages/ProductPage/Perfume";
import Diffuser from "./pages/ProductPage/Diffuser";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  const handleLoginChange = (status) => {
    setIsLogin(status);
  };

  return (
    <CookiesProvider>
      <Router>
        <Header />
        <ToolBar isLogin={isLogin} onLoginChange={handleLoginChange} />
        <Routes>
          <Route
            path="/"
            element={<Home onLoginChange={handleLoginChange} />}
          />
          <Route path="/mypage" element={<Mypage />} />
          <Route path="/new" element={<New />} />
          <Route path="/perfume" element={<Perfume />} />
          <Route path="/diffuser" element={<Diffuser />} />
        </Routes>
        <Footer />
      </Router>
    </CookiesProvider>
  );
}

export default App;
