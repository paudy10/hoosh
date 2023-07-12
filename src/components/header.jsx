import React from "react";
import { useNavigate } from "react-router-dom";
const Header = (props) => {
  const navigate = useNavigate();
  const login = () => {
    navigate("/dashboard");
  };
  return (
    <div
      style={{
        fontSize: "17px",
        margin: "1vh 1vw",
        fontWeight: "bolder",
        display: "flex",
        justifyContent: "space-between",
        width: "100%",
      }}>
      {props.login ? (
        <div
          onClick={login}
          style={{ cursor: "pointer" }}>
          ورود
        </div>
      ) : (
        <div></div>
      )}
      <div>{props.text ? props.text : " هوش مصنوعی"}</div>
      <div></div>
    </div>
  );
};
export default Header;
