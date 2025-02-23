import React from "react";
import "../../styles/Home.css";
import Menu from "./Menu";
import Info from "./Info";
import Banner from "./Banner";

const Home = () => {
  return (
    <div className="home-container">
      <Banner></Banner>
      <Menu></Menu>
      <Info></Info>
    </div>
  );
};

export default Home;
