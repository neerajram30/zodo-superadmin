import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  arrow_left,
  bin_icon_red,
  email_icon,
  pencil_icon,
  phone_icon,
  search_outline_icon,
} from "../imagepath";
import { three_dots_menu } from "../imagepath";
import Overview from "./Overview";
import HospitalModal from "./HospitalModal";
import FastTag from "./FastTag";
import Finance from "./Finance";
import Reviews from "./Reviews/Reviews";
import TotalBookings from "./TotalBookings/TotalBookings";
import Department from "./Departments/Department";
import ToggleModal from "./ToggleModal";
import PropTypes from "prop-types";
import FullscreenLoader from "../loadings/FullscreenLoader";
import { useChangeHospitalStatus } from "../../hooks/hospitals/useChangeHospitalStatus";
import TransparentTabs from "../tabs/TransparentTabs";

function HospitalDetailsCard(props) {
  const { hospitalDetails } = props;
  const navigate = useNavigate();
  const { id } = useParams();
  // const [showToast, setShowToast] = useState(() => () => {});
  const [show, setShow] = useState(false);
  const [disableshow, setdisableShow] = useState(false);
  const [disable, setdisable] = useState(false);
  // const { mutate, isLoading } = useEditHostpital();
  const { mutate, isLoading } = useChangeHospitalStatus();
  const tabData = [
    {
      id: "overview",
      title: "Overview",
      content: <Overview />,
      link: "overview",
    },
    {
      id: "department",
      title: "Department",
      content: <Department hospitalId={id} />,
      link: "department",
    },
    { id: "finance", title: "Finance", content: <Finance />, link: "finance" },
    {
      id: "total-bookings",
      title: "Total Bookings",
      content: <TotalBookings />,
      link: "bookings",
    },
    { id: "reviews", title: "Reviews", content: <Reviews />, link: "review" },
  ];

  const hospitalStatus = hospitalDetails?.status;

  const handleTogglebtn = (e) => {
    e.stopPropagation();
    setdisableShow(true);
  };

  const handleDisable = async () => {
    const { id } = hospitalDetails;
    const updatedStatus = {
      status: hospitalStatus === "active" ? "disabled" : "active",
    };
    await mutate(
      { id: id, data: updatedStatus },
      {
        onSuccess: () => {
          setdisableShow(false);
        },
      }
    );
  };

  return (
    id && (
      <div className="mt-3">
        <div className="card-box profile-header rounded-bottom-0">
          <div className="row">
            <div className="d-flex justify-content-between">
              <div className="basic-hero-header">
                <Link to onClick={() => navigate(-1)}>
                  <img src={arrow_left} alt="" />
                </Link>
                <span className="ms-3">Hospital Details</span>
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
                    to={`/manage-hospitals/${id}/edit`}
                  >
                    <img
                      src={pencil_icon}
                      alt="edit"
                      className="dropdown-menu-icon"
                    />
                    <span className="ps-2">Edit</span>
                  </Link>
                  <div className="dropdown-divider" />
                  <Link
                    className="dropdown-item d-flex"
                    // to="#"
                    onClick={handleTogglebtn}
                  >
                    {/* <img
                    src={toggle_icon}
                    alt="disable"
                    className="dropdown-menu-icon"
                  /> */}

                    <div
                      // onClick={handleTogglebtn}
                      className="status-toggle d-flex justify-content-between align-items-center"
                    >
                      <input
                        type="checkbox"
                        id="status"
                        className="check"
                        checked={
                          hospitalDetails?.status === "active" ? true : false
                        }
                      />
                      <label htmlFor="status" className="checktoggle-small">
                        checkbox
                      </label>
                    </div>
                    <span className="ps-2">
                      {hospitalDetails?.status === "active"
                        ? "Disable"
                        : "Enable"}
                    </span>
                  </Link>
                  <div className="dropdown-divider" />
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
                    <span className="text-danger ps-1">Delete</span>
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
                        <img className="" src={hospitalDetails?.logo} alt="#" />
                      </Link>
                    </div>
                  </div>
                </div>
                <div className="col ps-4">
                  {/* <div className="col-md-4"> */}
                  <div className="profile-info-left pt-3">
                    <h3 className="user-name m-t-0 mb-0">
                      {hospitalDetails?.name}
                    </h3>
                    {/* <small className="text-muted">
                      multinational healthcare group
                    </small> */}
                  </div>
                  {/* </div> */}
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
                        {hospitalDetails?.contact_details?.mobile ??
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
                        {hospitalDetails?.contact_details?.email ?? "No email"}
                      </span>
                    </Link>
                  </span>
                </li>
                {hospitalDetails?.contact_details?.website && (
                  <li>
                    <span className="text">
                      <Link to>
                        <img src={search_outline_icon} alt="website" />{" "}
                        <span className="ms-1">
                          {hospitalDetails?.contact_details?.website}
                        </span>
                      </Link>
                    </span>
                  </li>
                )}
              </ul>
            </div>

            <div className="col-md-4 pt-4 ps-md-5 pt-md-2">
              <h6>
                <span>GSTIN</span>{" "}
                <span className="fw-semibold text-black">
                  {hospitalDetails?.gst}
                </span>
              </h6>
              <button className="hospital-draft-btn text-primary w-75 mt-1 pt-1 pb-1">
                {hospitalDetails?.status}
              </button>
            </div>
          </div>

          <div className="row mt-5">
            <div className="col-md-4">
              <ul className="personal-info">
                <li>
                  <span className="title">Address:</span>
                  <span className="text">
                    <p className="w-md-75 ms-3">
                      {hospitalDetails?.address?.lineOne +
                        ", " +
                        hospitalDetails?.address?.lineTwo +
                        ", " +
                        hospitalDetails?.address?.city}
                    </p>
                  </span>
                </li>
                <li>
                  <span className="title">District:</span>
                  <span className="text">
                    <p className="w-md-75 ms-3">
                      {hospitalDetails?.address?.district}
                    </p>
                  </span>
                </li>
                <li>
                  <span className="title">State:</span>
                  <span className="text">
                    <p className="w-md-75 ms-3">
                      {hospitalDetails?.address?.state}
                    </p>
                  </span>
                </li>
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
                          {hospitalDetails?.bank_details?.account_number}
                        </span>
                      </span>
                    </li>
                    <li className="mt-3 mb-3">
                      <span className="payment-title">
                        Account Holder Name:{" "}
                        <span className="fw-semibold text-black">
                          {hospitalDetails?.bank_details?.account_holder}
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
                          {hospitalDetails?.bank_details?.ifsc}
                        </span>
                      </span>
                    </li>
                    <li className="mt-3 mb-3">
                      <span className="payment-title">
                        UPI ID:{" "}
                        <span className="fw-semibold text-black">
                          {hospitalDetails?.bank_details?.upi_id}
                        </span>
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="col mt-4 mt-md-0">
              <FastTag
                fastTagDetails={hospitalDetails?.fastTag}
                toggleFasttag={true}
              />
            </div>
          </div>
        </div>
        <TransparentTabs tabData={tabData} />
        {/* <div className="profile-tabs">
          <ul className="nav nav-tabs nav-tabs-bottom">
            {tabData.map((tabItem, i) => (
              <li key={tabItem.id + i}>
                <Link
                  className={`nav-link ${i == 0 ? "active" : ""}`}
                  to={`/manage-hospitals/${id}#${tabItem.id}`}
                  data-bs-toggle="tab"
                >
                  {tabItem.title}
                </Link>
              </li>
            ))}
          </ul>
          <div className="tab-content mt-1">
            {tabData.map((tabItem, i) => (
              <div
                className={`tab-pane ${i == 0 ? "show active" : ""}`}
                id={tabItem.id}
                key={tabItem.id + i}
                aria-current={tabItem.id}
              >
                {tabItem.content}
              </div>
            ))}
          </div>
        </div> */}
        <HospitalModal
          show={show}
          setShow={setShow}
          hospitalId={hospitalDetails?.id}
          // setShowToast={setShowToast}
          // showToast={setShowToast}
        />
        <ToggleModal
          show={disableshow}
          setShow={setdisableShow}
          setdisable={setdisable}
          disable={disable}
          handleDisable={handleDisable}
          isLoading={isLoading}
          title="Hospital"
        />
        {isLoading && <FullscreenLoader />}
      </div>
    )
  );
}

HospitalDetailsCard.propTypes = {
  hospitalDetails: PropTypes.node,
};

export default HospitalDetailsCard;
