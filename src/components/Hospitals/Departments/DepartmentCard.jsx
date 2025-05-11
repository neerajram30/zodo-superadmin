import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import DeleteDepartment from "./DeleteDepartment";
import EditDepartment from "./EditDepartment";

function DepartmentCard(props) {
  const { data } = props;
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  return (
    <div className="dash-widget">
      <div className="dash-content dash-count flex-grow-1 department-card">
        <div className="d-flex justify-content-between">
          <h6>{data.name}</h6>
          <div className="">
            <div className="dropdown dropdown-action bg-white">
              <Link
                to="#"
                className=""
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <i className="fas fa-ellipsis-v" />
              </Link>
              <div className="dropdown-menu dropdown-menu-end">
                <Link
                  className="dropdown-item"
                  // to={`/manage-doctors/edit-doctor/${record.id}`}
                  onClick={() => setShowEdit(true)}
                >
                  <i className="far fa-edit me-2" />
                  Edit
                </Link>
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setShowDelete(true)}
                >
                  <i className="fa fa-trash-alt m-r-5"></i> Delete
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <p className="text-dark col">{data.status}</p>
          {/* <div className="col-auto">
            <img src={right_chevron} alt="#" />
          </div> */}
        </div>
      </div>
      <DeleteDepartment show={showDelete} setShow={setShowDelete} departmentId={data.id}/>
      <EditDepartment show={showEdit} setShow={setShowEdit} departmentData={data}/>
    </div>
  );
}
DepartmentCard.propTypes = {
  data: PropTypes.node,
};

export default DepartmentCard;
