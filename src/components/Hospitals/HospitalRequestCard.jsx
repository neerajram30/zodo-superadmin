import PropTypes from "prop-types";
import { useState } from "react";
import { apollo_logo } from "../imagepath";
import { Link } from "react-router-dom";
import ApproveRequestModal from "../modals/ApproveRequestModal";
import { useChangeHospitalStatus } from "../../hooks/hospitals/useChangeHospitalStatus";

function HospitalRequestCard(props) {
  const { hospitalData } = props;
  const [showApprove, setshowApprove] = useState(false);
  const { mutate, isLoading } = useChangeHospitalStatus();
  const handelHospitalRequest = async () => {
    const statusUpdate = { status: "active" };
    await mutate({ id: hospitalData.id, data: statusUpdate });
  };
  return (
    <div className="card invoices-grid-card w-100" key={hospitalData.id}>
      {/* <Link to> */}
        <div className="card-body">
          <div className="row align-items-center hospital-card">
            <div className="col">
              <img src={apollo_logo} alt="#" />
            </div>
            {/* <div className="col-auto">
              <img src={right_chevron} alt="#" />
            </div> */}
            <div className="d-flex mt-3 justify-content-between">
              <div className="">
                <h5>{hospitalData.name}</h5>
              </div>
              {/* <div className="">
                <span className="text-primary">
                  {hospitalData.completed} Completed
                </span>
              </div> */}
            </div>

            <div className="mt-2">
              <div className="d-flex justify-content-start">
                <button
                  // to
                  // data-bs-toggle="modal"
                  // data-bs-target="#delete_invoices_details"
                  className="hospital-draft-btn rounded-pill text-primary review-btn"
                  onClick={() => setshowApprove(true)}
                >
                  Approve
                </button>
                <Link
                  to={`/manage-hospitals/manage-request/${hospitalData.id}`}
                  // data-bs-toggle="modal"
                  // data-bs-target="#save_invocies_details"
                  className="text-white hospital-add-btn rounded-pill review-btn ms-2"
                >
                  Review Now
                </Link>
              </div>
            </div>
          </div>
        </div>
      {/* </Link> */}
      <ApproveRequestModal
        show={showApprove}
        setShow={setshowApprove}
        title="review hospital request"
        handleRequest={handelHospitalRequest}
        isLoading={isLoading}
      />
    </div>
  );
}

HospitalRequestCard.propTypes = {
  hospitalData: PropTypes.node,
};
export default HospitalRequestCard;
