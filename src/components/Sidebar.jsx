/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import {
  dashboard,
  logout_01,
  menuicon03,
  menuicon08,
  menuicon09,
  menuicon16,
} from "./imagepath";
import { useAuth } from "../hooks/auth/useAuth";

const Sidebar = ({ isOpen, onClose, activeClassName, id, id1 }) => {
  const { setUser } = useAuth();
  const navigate = useNavigate();

  const handleLogout = (e) => {
    e.preventDefault();
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
    onClose(); // close sidebar on logout
  };

  const handleClick = (e, item, item1) => {
    const div = document.querySelector(`#${item}`);
    const ulDiv = document.querySelector(`.${item1}`);

    if (ulDiv && div) {
      ulDiv.style.display = ulDiv.style.display === "block" ? "none" : "block";
      div.classList.toggle("subdrop");
    }
  };

  useEffect(() => {
    if (id && id1) {
      const ele = document.getElementById(id);
      handleClick(ele, id, id1);
    }
  }, [id, id1]);

  const handleMenuClick = () => {
    // This will remove mobile sidebar overlay & classes
    document.body.classList.remove("slide-nav");
    document.documentElement.classList.remove("menu-opened");

    const overlay = document.getElementsByClassName("sidebar-overlay")[0];
    if (overlay) overlay.classList.remove("opened");
  };

  return (
    <div className={`sidebar ${isOpen ? "sidebar-open" : ""}`} id="sidebar">
      <Scrollbars
        autoHide
        autoHideTimeout={1000}
        autoHideDuration={200}
        autoHeight
        autoHeightMin={0}
        autoHeightMax="95vh"
        thumbMinSize={30}
      >
        <div className="sidebar-inner slimscroll">
          <div id="sidebar-menu" className="sidebar-menu">
            <ul className="mt-5">
              <li className="submenu">
                <Link
                  to="/dashboard"
                  onClick={handleMenuClick}
                  className={activeClassName === "dashboard" ? "active" : ""}
                >
                  <span className="menu-side">
                    <img src={dashboard} alt="" />
                  </span>
                  <span>Dashboard</span>
                </Link>
              </li>

              <li className="submenu">
                <Link
                  to="#"
                  id="menu-item3"
                  onClick={(e) => handleClick(e, "menu-item3", "menu-items3")}
                  className={
                    activeClassName === "manage-hospitals" ||
                    activeClassName === "manage-doctors"
                      ? "active"
                      : ""
                  }
                >
                  <span className="menu-side">
                    <img src={menuicon08} alt="" />
                  </span>
                  <span>Manage</span>
                  <span className="menu-arrow" />
                </Link>
                <ul className="menu-items3" style={{ display: "none" }}>
                  <li>
                    <Link
                      to="/manage-hospitals"
                      className={
                        activeClassName === "manage-hospitals"
                          ? "submenu-active"
                          : "submenu-normal"
                      }
                      onClick={handleMenuClick}
                    >
                      Hospitals
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/manage-doctors"
                      className={
                        activeClassName === "manage-doctors"
                          ? "submenu-active"
                          : "submenu-normal"
                      }
                      onClick={handleMenuClick}
                    >
                      Doctors
                    </Link>
                  </li>
                </ul>
              </li>
              <li className="submenu">
                <Link
                  to="/manage-users"
                  className={activeClassName === "manage-users" ? "active" : ""}
                  onClick={handleMenuClick}
                >
                  <span className="menu-side">
                    <img src={menuicon03} alt="" />
                  </span>
                  <span>Manage Users</span>
                </Link>
              </li>
              <li className="submenu">
                <Link
                  to="/finance"
                  className={activeClassName === "finance" ? "active" : ""}
                  onClick={handleMenuClick}
                >
                  <span className="menu-side">
                    <img src={menuicon09} alt="" />
                  </span>
                  <span>Finance</span>
                </Link>
              </li>

              

              {/* <li className="submenu">
                <Link
                  to="/user-manage"
                  className={activeClassName === "userManage" ? "active" : ""}
                  onClick={handleMenuClick}
                >
                  <span className="menu-side">
                    <img src={menuicon03} alt="" />
                  </span>
                  <span>User Manage</span>
                </Link>
              </li> */}

              {/* <li className="submenu">
                <Link
                  to="#"
                  id="menu-item4"
                  onClick={(e) => handleClick(e, "menu-item4", "menu-items4")}
                  className={
                    activeClassName === "manage-users"
                      ? "active"
                      : ""
                  }
                >
                  <span className="menu-side">
                    <img src={menuicon08} alt="" />
                  </span>
                  <span>Manage Users</span>
                  <span className="menu-arrow" />
                </Link>
                <ul className="menu-items4" style={{ display: "none" }}>
                  <li>
                    <Link
                      to="/manage-users"
                      className={
                        activeClassName === "manage-users"
                          ? "submenu-active"
                          : "submenu-normal"
                      }
                      onClick={handleMenuClick}
                    >
                      Users
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/create-user"
                      className={
                        activeClassName === "create-user"
                          ? "submenu-active"
                          : "submenu-normal"
                      }
                      onClick={handleMenuClick}
                    >
                      Create User
                    </Link>
                  </li>
                </ul>
              </li> */}

              <li className="submenu">
                <Link
                  to="/app-manage"
                  className={activeClassName === "appmanage" ? "active" : ""}
                  onClick={handleMenuClick}
                >
                  <span className="menu-side">
                    <img src={menuicon16} alt="" />
                  </span>
                  <span>App Manage</span>
                </Link>
              </li>
            </ul>

            <div className="logout-btn submenu">
              <Link to="#" onClick={handleLogout}>
                <span className="menu-side">
                  <img src={logout_01} alt="" />
                </span>
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
      </Scrollbars>
    </div>
  );
};

export default Sidebar;
