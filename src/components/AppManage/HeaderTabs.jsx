import React from "react";
import { Link, useLocation } from "react-router-dom";

function HeaderTabs() {
  const location = useLocation();
  console.log(location.pathname.split("/")[1]);
  const activePath = location.pathname.split("/")[1];

  const tabs = [
    {
      id: 0,
      title: "Add Banner",
      link: "app-manage",
    },
    {
      id: 1,
      title: "App links",
      link: "app-link",
    },
    {
      id: 2,
      title: "Platform",
      link: "platform",
    },
    // {
    //   id: 3,
    //   title: "Notifications",
    //   link: "notifications",
    // },
  ];
  return (
    <div className="settings-menu-links">
      <ul className="nav nav-tabs menu-tabs">
        {tabs.map((item) => (
          <li className="nav-item" key={item.link + item.id}>
            <Link
              className={`nav-link ${
                item.link === activePath ? "bg-primary" : ""
              }`}
              to={`/${item.link}`}
            >
              {item.title}
            </Link>
          </li>
        ))}
        {/* <li className="nav-item">
          <Link className="nav-link bg-primary" to="/settingssociallink">
            Social Links
          </Link>
        </li>

        <li className="nav-item">
          <Link className="nav-link" to="/settingschangepassword">
            Change Password
          </Link>
        </li> */}
      </ul>
    </div>
  );
}

export default HeaderTabs;
