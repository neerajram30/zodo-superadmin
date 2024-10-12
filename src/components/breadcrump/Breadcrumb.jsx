import React from "react";
import { Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";

function Breadcrumb() {
  return (
    <>
      <div className="page-header">
        <div className="row">
          <div className="col-sm-12">
            <ul className="breadcrumb">
              <li className="breadcrumb-item">
                <Link to="#">Dashboard </Link>
              </li>
              <li className="breadcrumb-item">
                <i className="feather-chevron-right">
                  <FeatherIcon icon="chevron-right" />
                </i>
              </li>
              <li className="breadcrumb-item active">Admin Dashboard</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default Breadcrumb;
