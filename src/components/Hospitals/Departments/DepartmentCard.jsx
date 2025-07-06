import { useState } from "react";
import PropTypes from "prop-types";
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
