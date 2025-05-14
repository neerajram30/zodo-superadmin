import { Link, useNavigate, useParams } from "react-router-dom";
import {
  apollo_logo,
  arrow_left,
  bin_icon_red,
  cross_icon,
  email_icon,
  eye_icon,
  pdf_icon,
  phone_icon,
  search_outline_icon,
  three_dots_menu,
} from "../imagepath";
import StatusButton from "../assests/StatusButton";
import { formatDate } from "fullcalendar/index.js";
import { findDueDate } from "../configs/findDueDate";
import { useDeleteSettlement } from "../../hooks/settlements/useDeleteSettlement";
import ConfirmDelete from "../modals/ConfirmDelete";
import { useState } from "react";
import PropTypes from "prop-types";
function SettlementDetailsCard(props) {
  const { data } = props;
  console.log("Settlement data ", data);

  const navigate = useNavigate();
  const { id } = useParams();
  //   const { data, isLoading } = useViewSettlements(id);
  const [show, setShow] = useState(false);
  const { mutate, isLoading: deleteLoading } = useDeleteSettlement(id);

  const handleDelete = async () => {
    await mutate(id, {
      onSuccess: () => {
        setShow(false);
      },
    });
  };
  return (
    <div className="mt-3">
      <div className="card-box profile-header rounded-bottom-0">
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="basic-hero-header">
              <Link to onClick={() => navigate(-1)}>
                <img src={arrow_left} alt="" />
              </Link>
              <span className="ms-3">Settlement Details</span>
            </div>
            <div className="dropdown">
              <Link
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                id="customdropdown"
              >
                <img src={three_dots_menu} alt="" />
              </Link>
              <div className="dropdown-menu" aria-labelledby="customdropdown">
                <Link
                  className="dropdown-item d-flex"
                  to=""
                  onClick={() => setShow(true)}
                >
                  <img
                    src={bin_icon_red}
                    alt="delete"
                    className="me-2 ms-1"
                    width={16}
                    height={16}
                  />
                  <span className="text-danger ps-1">Remove</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-3">
                <div className="hospital-img-wrap">
                  <div className="profile-img">
                    <Link to="#">
                      <img className="" src={apollo_logo} alt="#" />
                    </Link>
                  </div>
                </div>
              </div>
              <div className="col ps-4">
                <div className="profile-info-left pt-3">
                  <h3 className="user-name m-t-0 mb-0">
                    {data?.hospital?.name}
                  </h3>
                </div>
              </div>
            </div>
          </div>

          <div className="col-md-4 ps-md-5">
            <ul className="personal-info ps-md-5">
              <li>
                <span className="text">
                  <Link to className="text-dark">
                    <img src={phone_icon} alt="phone" />{" "}
                    <span className="ms-1">
                      {data?.hospital?.contact_details?.mobile ??
                        "No phone number"}
                    </span>
                  </Link>
                </span>
              </li>
              <li>
                <span className="text">
                  <Link to className="text-dark">
                    <img src={email_icon} alt="email" />{" "}
                    <span className="ms-1">
                      {data?.hospital?.contact_details?.email ?? "No email"}
                    </span>
                  </Link>
                </span>
              </li>
              {data?.hospital?.contact_details?.website && (
                <li>
                  <span className="text">
                    <Link to>
                      <img src={search_outline_icon} alt="website" />{" "}
                      <span className="ms-1">
                        {data?.hospital?.contact_details?.website}
                      </span>
                    </Link>
                  </span>
                </li>
              )}
            </ul>
          </div>

          <div className="col-md-4 pt-4 ps-md-5 pt-md-2">
            {data?.transaction_id && (
              <h6>
                <span>TNX ID</span>{" "}
                <span className="fw-semibold text-black">
                  {data?.transaction_id}
                </span>
              </h6>
            )}
            <StatusButton status={data?.status} />
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <ul className="personal-info">
              <li>
                <span className="title">Amount:</span>
                <span className="text">
                  <p className="w-md-75 ms-3 fw-semibold text-black">
                    ₹ {data?.amount}
                  </p>
                </span>
              </li>
              <li>
                <span className="title">Method:</span>
                <span className="text">
                  <p className="w-md-75 ms-3 fw-semibold text-black">
                    {data?.payment_method}
                  </p>
                </span>
              </li>
              {data?.approve_date ? (
                <li>
                  <span className="title">Approved:</span>
                  <span className="text">
                    <p className="w-md-75 ms-3 fw-semibold text-black">
                      {formatDate(data?.approve_date)}
                    </p>
                  </span>
                </li>
              ) : (
                <li>
                  <span className="title">Requested:</span>
                  <span className="text">
                    <p className="w-md-75 ms-3 fw-semibold text-black">
                      {formatDate(data?.request_date)}
                    </p>
                  </span>
                </li>
              )}
            </ul>
          </div>

          <div className="col-md-5">
            <div className="row border border-secondary-subtle pt-3 pb-1">
              <div className="col">
                <ul className="payment-info w-1">
                  <li>
                    <span className="payment-title">
                      Account Number:{" "}
                      <span className="fw-semibold text-black">
                        {data?.hospital?.bank_details?.account_number}
                      </span>
                    </span>
                  </li>
                  <li className="mt-3 mb-3">
                    <span className="payment-title">
                      Account Holder Name:{" "}
                      <span className="fw-semibold text-black">
                        {data?.hospital?.bank_details?.account_holder}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="payment-info">
                  <li>
                    <span className="payment-title">
                      IFSC Code:{" "}
                      <span className="fw-semibold text-black">
                        {data?.hospital?.bank_details?.ifsc}
                      </span>
                    </span>
                  </li>
                  <li className="mt-3 mb-3">
                    <span className="payment-title">
                      UPI ID:{" "}
                      <span className="fw-semibold text-black">
                        {data?.hospital?.bank_details?.upi_id}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col mt-4 mt-md-0">
            <div className="d-flex"></div>

            <div className="col text-secondary align-middle text-center mt-2">
              <h5 className="pt-1">DUE STATUS</h5>
              <p
                className={`${
                  findDueDate(data?.request_date) > 0
                    ? "custom-badge status-red"
                    : "custom-badge status-orange"
                }`}
              >
                {findDueDate(data?.request_date > 0) ? "No Dues" : "Over Due"}
                {/* {getDuestatus(data?.request_date)} */}
              </p>
            </div>
          </div>
        </div>
        <div className="mb-4 mt-5">
          <div className="row mt-2">
            <div className="col-12 pt-2 col-md-2">Documents</div>
            <div className="col-12 col-md-10 md:mt-0 mt-1">
              <div className="d-flex justify-content-between align-items-center file-upload-details ps-3 pe-3">
                <div className="d-flex align-items-center">
                  <img src={pdf_icon} alt="pdf_icon" />
                  <div className="d-flex flex-column justify-content-center file-details ms-2">
                    <h6>Reg 0</h6>
                    <p>24MB</p>
                  </div>
                </div>
                <div className="d-flex">
                  <div className="m-1">
                    <img src={eye_icon} alt="" />
                  </div>
                  <div className="m-1">
                    <img src={cross_icon} alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <HospitalModal
        show={show}
        setShow={setShow}
        hospitalId={data?.id}
        // setShowToast={setShowToast}
        // showToast={setShowToast}
      /> */}
      {/* <ToggleModal
        show={disableshow}
        setShow={setdisableShow}
        setdisable={setdisable}
        disable={disable}
        handleDisable={handleDisable}
        isLoading={isLoading}
        title="Hospital"
      /> */}
      {/* {isLoading && <FullscreenLoader />} */}
      <ConfirmDelete
        show={show}
        setShow={setShow}
        title="Settlement"
        handleDelete={handleDelete}
        isLoading={deleteLoading}
      />
    </div>
  );
}

SettlementDetailsCard.propTypes = {
  data: PropTypes.object,
};

export default SettlementDetailsCard;
