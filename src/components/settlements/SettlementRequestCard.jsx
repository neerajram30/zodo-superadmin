import PropTypes from "prop-types";
import { useState } from "react";
import ApproveRequestModal from "../modals/ApproveRequestModal";
import { Link } from "react-router-dom";
import { useChangeSettlementStatus } from "../../hooks/settlements/useChageSettlementStatus";
import ImageBox from "../assests/ImageBox";

function SettlementRequestCard(props) {
  const { data } = props;
  const [showApprove, setshowApprove] = useState(false);
  const { mutate, isLoading } = useChangeSettlementStatus();
  console.log(isLoading);
  // const navigate = useNavigate();
  const handleSettlementRequest = async () => {
    const statusUpdate = { status: "approved" };
    await mutate({ id: data?.id, data: statusUpdate });
  };
  const handleApprove = (e) => {
    e.preventDefault();
    setshowApprove(true);
    // navigate(`?tab=${tab}`)
  };
  return (
    <div className="card invoices-grid-card w-100" key={data?.id}>
      <div>
        <div className="card-body">
          <div className="row align-items-center hospital-card">
            <div className="col">
              <ImageBox
                src={data?.hospital?.logo}
                alt={data?.hospital?.name || "Hospital Logo"}
                width="75px"
                height="75px"
              />
            </div>
            <div className="d-flex mt-3 justify-content-between">
              <div className="">
                <h5>{data?.hospital?.name}</h5>
              </div>
            </div>

            <div className="mt-2">
              <div className="d-flex justify-content-center">
                {data?.status !== "approved" && (
                  <button
                    // data-bs-toggle="modal"
                    // data-bs-target="#delete_invoices_details"
                    className="hospital-draft-btn rounded-pill text-primary review-btn"
                    onClick={handleApprove}
                  >
                    Approve
                  </button>
                )}
                <Link
                  to={`/dashboard/settlement-requests/${data?.id}`}
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
      </div>
      <ApproveRequestModal
        show={showApprove}
        setShow={setshowApprove}
        title="review settlement request"
        handleRequest={handleSettlementRequest}
        isLoading={isLoading}
      />
    </div>
  );
}

SettlementRequestCard.propTypes = {
  data: PropTypes.array,
  tab: PropTypes.string,
};

export default SettlementRequestCard;
