/* eslint-disable no-unused-vars */
import React, { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  logo,
  baricon,
  baricon1,
  searchnormal,
  noteicon,
  user06,
  settingicon01,
  noteicon1,
} from "./imagepath";
import { useAuth } from "../hooks/auth/useAuth";

const Header = () => {
  const {user} = useAuth();
  const userName = user?.first_name + user?.last_name || "User";
  const userRole = user?.user_type || "Role"
  const handlesidebar = () => {
    document.body.classList.toggle("mini-sidebar");
  };
  const navigate = useNavigate();
  const handlesidebarmobilemenu = () => {
    document.body.classList.toggle("slide-nav");
    document.getElementsByTagName("html")[0].classList.toggle("menu-opened");
    document
      .getElementsByClassName("sidebar-overlay")[0]
      .classList.toggle("opened");
  };

  const openDrawer = () => {
    const div = document.querySelector(".main-wrapper");
    if (div?.className?.includes("open-msg-box")) {
      div?.classList?.remove("open-msg-box");
    } else {
      div?.classList?.add("open-msg-box");
    }
  };

  useEffect(() => {
    const handleClick = () => {
      if (!document.fullscreenElement) {
        document.documentElement.requestFullscreen();
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        }
      }
    };

    const maximizeBtn = document.querySelector(".win-maximize");
    // maximizeBtn.addEventListener('click', handleClick);

    return () => {
      // maximizeBtn.removeEventListener('click', handleClick);
    };
  }, []);


  const handleLogout = ()=>{
    navigate('/');
    localStorage.clear()
  }

  return (
    <div className="main-wrapper">
      <div className="header">
        <div className="header-left">
          <Link to="/" className="logo">
            <img src={logo} width={108} height={38} alt="" />{" "}
          </Link>
        </div>

        <Link
          id="mobile_btn"
          className="mobile_btn float-start"
          to="#"
          onClick={handlesidebarmobilemenu}
        >
          <img src={baricon1} alt="" />
        </Link>

        <ul className="nav user-menu float-end">
          {/* <li className="nav-item dropdown d-none d-sm-block">
            <Link
              onClick={openDrawer}
              id="open_msg_box"
              className="hasnotifications nav-link"
            >
              <img src={noteicon1} alt="" />
              <span className="pulse" />{" "}
            </Link>
          </li> */}
          <li className="nav-item dropdown has-arrow user-profile-list">
            <Link
              to="#"
              className="dropdown-toggle nav-link user-link"
              data-bs-toggle="dropdown"
            >
              <div className="user-names">
                <h5>{userName}</h5>
                <span>{userRole}</span>
              </div>
              <span className="user-img">
                <img src={user06} alt="Admin" />
              </span>
            </Link>
            <div className="dropdown-menu">
              {/* <Link className="dropdown-item" to="/profile">
                My Profile
              </Link> */}
              {/* <Link className="dropdown-item" to="/edit-profile">
                Edit Profile
              </Link> */}
              <Link className="dropdown-item" to="/settingssociallink">
                Settings
              </Link>
              <Link className="dropdown-item" to onClick={handleLogout}>
                Logout
              </Link>
            </div>
          </li>
          {/* <li className="nav-item ">
            <Link to="/settings" className="hasnotifications nav-link">
              <img src={settingicon01} alt="" />{" "}
            </Link>
          </li> */}
        </ul>
        <div className="dropdown mobile-user-menu float-end">
          <Link
            to="#"
            className="dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <i className="fa-solid fa-ellipsis-vertical" />
          </Link>
          <div className="dropdown-menu dropdown-menu-end">
            <Link className="dropdown-item" to="/profile">
              My Profile
            </Link>
            <Link className="dropdown-item" to="edit-profile.html">
              Edit Profile
            </Link>
            <Link className="dropdown-item" to="/settings">
              Settings
            </Link>
            <Link className="dropdown-item" to="/login">
              Logout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
