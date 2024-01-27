import React from "react";
import logo from "../Images/icons/Standard Collection 11.svg";
import logo_name from "../Images/icons/companyName.png";

const Logo = () => {
  return (
    <div style={{display: "flex", alignItems: "center", gap: "0.5rem"}} className="logo">
      <img style={{height: "35px", }} src={logo} alt="logo" />
      <img style={{height: "18px", }} src={logo_name} alt="logo name" />
    </div>
  );
};

export default Logo;
