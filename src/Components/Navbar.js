import React from "react";
// 
import { BiBookHeart } from "react-icons/bi";
import { IoMdNotificationsOutline } from "react-icons/io";
import premium_login from "../Images/icons/fluent_premium-person-20-regular.svg";
import user_pic from "../Images/user_profile.png";

const Navbar = (props) => {
  return (
    <div className="nav">
      {/* adds logo and search components here from App.js */}
      {props.children}
      <div className="nav__options-container"
      >
        <IoMdNotificationsOutline size={25} className="page__icons" />
        <BiBookHeart size={25} className="page__icons" />
        <img
          style={{ height: "27px" }}
          src={premium_login}
          alt="premium logo"
          className="page__icons"
        />
        <div className="user_profile page__icons ">
          <img src={user_pic} alt="profile_pic" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
