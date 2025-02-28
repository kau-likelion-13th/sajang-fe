import React from "react";
import { useCookies } from "react-cookie";
import "../styles/ToolBar.css";
import axios from "axios";

const ToolBar = ({ isLogin, onLoginChange }) => {
  const [cookies, removeCookie] = useCookies(["accessToken"]);

  const handleLoginRedirect = () => {
    window.location.href =
      "http://sajang-dev-env-2.eba-3ycixkjh.ap-northeast-2.elasticbeanstalk.com";
  };

  const handleLogout = () => {
    axios
      .delete("/users/logout", {
        headers: {
          accept: "*/*",
          Authorization: `Bearer ${cookies.accessToken}`,
        },
      })
      .then(() => {
        onLoginChange(false);
        removeCookie("accessToken", { path: "/" });
      })
      .catch((err) => {
        console.log("LOGOUT API 요청 실패:", err);
      });
  };

  const MoveToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const MoveToBottom = () => {
    window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
  };

  return (
    <div className="toolbar-container">
      <img
        src={
          isLogin
            ? `${process.env.PUBLIC_URL}/icon/icon_logout.svg`
            : `${process.env.PUBLIC_URL}/icon/icon_login.svg`
        }
        alt="login"
        className="toolbar-icon"
        onClick={isLogin ? handleLogout : handleLoginRedirect}
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/icon/icon_recent.svg`}
        alt="recent"
        className="toolbar-icon"
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/icon/icon_up.svg`}
        alt="up"
        className="toolbar-icon"
        onClick={MoveToTop}
      ></img>
      <img
        src={`${process.env.PUBLIC_URL}/icon/icon_down.svg`}
        alt="down"
        className="toolbar-icon"
        onClick={MoveToBottom}
      ></img>
    </div>
  );
};
export default ToolBar;
