/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Scrollbars from "react-custom-scrollbars-2";
import {
  dashboard,
  emptyWallet,
  logout_01,
  menuicon03,
  menuicon08,
  menuicon16,
} from "./imagepath";
import { useAuth } from "../hooks/auth/useAuth";
import ConfirmLogout from "./modals/ConfirmLogout";

const Sidebar = ({ isOpen, activeClassName, id, id1 }) => {
  const { setUser } = useAuth();
  const navigate = useNavigate();
  const [confirm, setConfirm] = useState(false);

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setUser(null);
    navigate("/login");
    // onClose(); // close sidebar on logout
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
                    activeClassName === "manage-doctors" ||
                    activeClassName === "manage-settlements"
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

                  <li>
                    <Link
                      to="/manage-settlements"
                      className={
                        activeClassName === "manage-settlements"
                          ? "submenu-active"
                          : "submenu-normal"
                      }
                      onClick={handleMenuClick}
                    >
                      Settlements
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
                    <img src={emptyWallet} alt="" />
                  </span>
                  <span>Finance</span>
                </Link>
              </li>
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
              <Link to="#" onClick={() => setConfirm(true)}>
                <span className="menu-side">
                  <img src={logout_01} alt="" />
                </span>
                <span>Logout</span>
              </Link>
            </div>
          </div>
        </div>
        <ConfirmLogout
          show={confirm}
          setShow={setConfirm}
          handleLogout={handleLogout}
        />
      </Scrollbars>
    </div>
  );
};

export default Sidebar;
