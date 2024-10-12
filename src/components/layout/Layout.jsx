import React from "react";
import Header from "../Header";
import Sidebar from "../Sidebar";
import PropTypes from "prop-types";
function Layout(props) {
  return (
    <>
      <Header />
      <Sidebar
        id="menu-item"
        id1="menu-items"
        activeClassName="admin-dashboard"
      />
      <div>{props.children}</div>
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.node,
};

export default Layout;
