import React, { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  arrow_left,
  bin_icon_red,
  email_icon,
  pencil_icon,
  phone_icon,
  qr_code,
  search_outline_icon,
  toggle_icon,
} from "../imagepath";
import { apollo_logo, three_dots_menu } from "../imagepath";
import Overview from "./Overview";
import HospitalModal from "./HospitalModal";
import FastTag from "./FastTag";
function HospitalDetailsCard() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [show, setShow] = useState(false);
  const tabData = [
    { id: "overview", title: "Overview", content: <Overview /> },
    { id: "finance", title: "Finance", content: <div>contnt2</div> },
    { id: "reviews", title: "Reviews", content: <div>contnt3</div> },
    {
      id: "total-bookings",
      title: "Total Bookings",
      content: <div>contnt4</div>,
    },
    { id: "history", title: "History", content: <div>contnt5</div> },
  ];

  return (
    <div>
      <div className="card-box profile-header">
        <div className="row">
          <div className="d-flex justify-content-between">
            <h5>
              <span onClick={() => navigate(-1)}>
                <img src={arrow_left} alt="" />
              </span>
              <span className="ms-2">Hospital Details</span>
            </h5>
            <div className="dropdown">
              <Link
                // className="dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                {/* <span className="bi bi-chevron-up"></span> */}
                <img src={three_dots_menu} alt="" />
              </Link>
              <div className="dropdown-menu">
                <Link
                  className="dropdown-item"
                  to={`/manage-hospitals/${id}/edit`}
                >
                  <img
                    src={pencil_icon}
                    alt="edit"
                    className="dropdown-menu-icon"
                  />
                  <span>Edit</span>
                </Link>
                <div className="dropdown-divider" />
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setShow(true)}
                >
                  <img
                    src={toggle_icon}
                    alt="disable"
                    className="dropdown-menu-icon"
                  />
                  <span>Disable</span>
                </Link>
                <div className="dropdown-divider" />
                <Link
                  className="dropdown-item"
                  to="#"
                  onClick={() => setShow(true)}
                >
                  <img
                    src={bin_icon_red}
                    alt="delete"
                    className="dropdown-menu-icon"
                  />
                  <span className="text-danger">Delete</span>
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
              <div className="col">
                {/* <div className="col-md-4"> */}
                <div className="profile-info-left pt-3">
                  <h3 className="user-name m-t-0 mb-0">
                    Apollo, Pvt Ltd Company
                  </h3>
                  <small className="text-muted">
                    multinational healthcare group
                  </small>
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
                    <span className="ms-1">770-889-6484</span>
                  </Link>
                </span>
              </li>
              <li>
                <span className="text">
                  <Link to className="text-dark">
                    <img src={email_icon} alt="email" />{" "}
                    <span className="ms-1">apollo@example.com</span>
                  </Link>
                </span>
              </li>
              <li>
                <span className="text">
                  <Link to>
                    <img src={search_outline_icon} alt="website" />{" "}
                    <span className="ms-1">www.apollo.com</span>
                  </Link>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-4 ps-md-5 pt-md-2">
            <h6>
              <span>GSTIN</span> GSTIN567890128347
            </h6>
            <button className="btn hospital-draft-btn text-primary w-75 mt-1">
              Active
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
                    Lorem ipsum dolor sit amet consectetur
                  </p>
                </span>
              </li>
              <li>
                <span className="title">District:</span>
                <span className="text">
                  <p className="w-md-75 ms-3">Hydrabad</p>
                </span>
              </li>
              <li>
                <span className="title">State:</span>
                <span className="text">
                  <p className="w-md-75 ms-3">Telengana</p>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-5">
            <div className="row border border-secondary-subtle pt-3 pb-1">
              <div className="col-md-4">
                <img src={qr_code} alt="qr" />
              </div>
              <div className="col">
                <ul className="payment-info w-1">
                  <li>
                    <span className="payment-title">Account Number:</span>
                    <span className="payment-text">
                      <p className="">111234567900</p>
                    </span>
                  </li>
                  <li>
                    <span className="payment-title">Bank Name:</span>
                    <span className="payment-text">
                      <p className="">Federal</p>
                    </span>
                  </li>
                  <li>
                    <span className="payment-title">IFSC Code:</span>
                    <span className="payment-text">
                      <p className="">FDRL124</p>
                    </span>
                  </li>
                  <li>
                    <span className="payment-title">UPI ID:</span>
                    <span className="payment-text">
                      <p className="">1234@oksbi</p>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col mt-4 mt-md-0">
            <FastTag />
            {/* <h5 className="ms-md-5">FAST TAG</h5>
            <div className="fastag-switch ms-md-5">
              <SwitchSelector
                onChange={onChange}
                options={options}
                initialSelectedIndex={initialSelectedIndex}
                backgroundColor={"#34C759"}
                fontColor={"#f5f6fa"}
              />
            </div>
            <div className="mt-5 ps-md-5">
              <h5>Select Fast Tag Count Per Day</h5>
              <div className="w-75">
                <Select
                  defaultValue={selectedOption}
                  onChange={setSelectedOption}
                  options={tagsCount}
                />
              </div>
            </div> */}
          </div>
        </div>
      </div>

      <div className="profile-tabs">
        <ul className="nav nav-tabs nav-tabs-bottom">
          {tabData.map((tabItem, i) => (
            <li key={tabItem.id + i}>
              <Link
                className={`nav-link ${i == 0 ? "active" : ""}`}
                to={`#${tabItem.id}`}
                data-bs-toggle="tab"
              >
                {tabItem.title}
              </Link>
            </li>
          ))}

          {/* <li className="nav-item">
            <Link
              className="nav-link active"
              to="#about-cont"
              data-bs-toggle="tab"
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#bottom-tab2" data-bs-toggle="tab">
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="#bottom-tab3" data-bs-toggle="tab">
              Messages
            </Link>
          </li> */}
        </ul>
        <div className="tab-content">
          {tabData.map((tabItem, i) => (
            <div
              className={`tab-pane ${i == 0 ? "show active" : ""}`}
              id={tabItem.id}
              key={tabItem.id + i}
            >
              {tabItem.content}
            </div>
          ))}
        </div>
      </div>
      <HospitalModal show={show} setShow={setShow} />
    </div>
  );
}

export default HospitalDetailsCard;
