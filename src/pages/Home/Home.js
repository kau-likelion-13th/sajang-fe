import React, { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import "../../styles/Home.css";
import Menu from "./Menu";
import Info from "./Info";
import Banner from "./Banner";

const Home = ({ onLoginChange }) => {
  const [cookies, setCookie] = useCookies(["accessToken"]);
  const navigate = useNavigate();
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const accessToken = params.get("accessToken");

    if (accessToken) {
      setCookie("accessToken", accessToken, {
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      });

      navigate("/", { replace: true });
      onLoginChange(true);
    }
  }, [setCookie, navigate, onLoginChange]);

  return (
    <div className="home-container">
      <Banner></Banner>
      <Menu></Menu>
      <Info></Info>
    </div>
  );
};

export default Home;
