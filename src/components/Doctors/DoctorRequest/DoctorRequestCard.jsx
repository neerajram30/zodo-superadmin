import { useState } from "react";
import ConfirmDelete from "../../modals/ConfirmDelete";
import ToggleDisable from "../../modals/ToggleDisable";
import { Link, useNavigate, useParams } from "react-router-dom";
import {
  arrow_left,
  cross_icon,
  email_icon,
  eye_icon,
  pdf_icon,
  pencil_icon,
  phone_icon,
  three_dots_menu,
} from "../../imagepath";
import PropTypes from "prop-types";
import FullscreenLoader from "../../loadings/FullscreenLoader";
import { useDoctorsDocument } from "../../../hooks/doctors/useDoctorsDocument";
import ComponentLoader from "../../loadings/ComponentLoader";
import { useDeleteDocument } from "../../../hooks/useDeleteDocument";
import StatusButton from "../../assests/StatusButton";

function DoctorRequestCard(props) {
  const navigate = useNavigate();
  const { id } = useParams();
  const { doctorDetails, isLoading } = props;
  const [show, setShow] = useState(false);
  const [documentId, setDocumentId] = useState("");
  const [showDocumentDelete, setShowDocumentdelete] = useState(false);
  const [disableshow, setdisableShow] = useState(false);
  const [disable, setdisable] = useState(false);
  console.log("Doctor details", doctorDetails);
  const { data: doctorDocuments, isLoading: documentLoading } =
    useDoctorsDocument(id);
  const { mutate: deleteDocument, isLoading: deleteLoading } =
    useDeleteDocument();
  const handelDeleteDocumentClick = (id) => {
    setShowDocumentdelete(true);
    setDocumentId(id);
  };
  const handelDeleteDocument = () => {
    // e.preventDefault();
    deleteDocument(documentId, {
      onSuccess: () => {
        setShowDocumentdelete(false);
      },
    });
  };
  return (
    <div>
      <div className="card-box profile-header mt-3 mb-5">
        <div className="row">
          <div className="d-flex justify-content-between">
            <div className="basic-hero-header">
              <Link to onClick={() => navigate(-1)}>
                <img src={arrow_left} alt="" />
              </Link>
              <span className="ms-3">Doctor Request</span>
            </div>
            <div className="dropdown">
              <Link
                // className="dropdown-toggle"
                to="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img src={three_dots_menu} alt="" />
              </Link>
              <div className="dropdown-menu">
                <Link
                  className="dropdown-item"
                  to={`/manage-doctors/request/${id}/edit`}
                >
                  <img
                    src={pencil_icon}
                    alt="edit"
                    className="dropdown-menu-icon"
                  />
                  <span>Edit</span>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="row mt-5">
          <div className="col-md-4">
            <div className="row">
              <div className="col-md-3">
                <div className="doctor-img-wrap">
                  <div className="profile-img">
                    <img
                      className="img-fluid"
                      src={doctorDetails?.profile_pic}
                      alt="#"
                    />
                  </div>
                </div>
              </div>
              <div className="col">
                {/* <div className="col-md-4"> */}
                <div className="profile-info-left pt-3">
                  <h3 className="user-name m-t-0 mb-0">
                    Dr {doctorDetails?.name}
                  </h3>
                  <small className="text-muted">
                    {" "}
                    {doctorDetails?.registration_details?.qualification}
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
                  <div className="text-dark">
                    <img src={phone_icon} alt="phone" />{" "}
                    <span className="ms-1">{doctorDetails?.phone_number}</span>
                  </div>
                </span>
              </li>
              <li>
                <span className="text">
                  <div className="text-dark">
                    <img src={email_icon} alt="email" />{" "}
                    <span className="ms-1">{doctorDetails?.email}</span>
                  </div>
                </span>
              </li>
            </ul>
          </div>

          <div className="col-md-4 pt-4 ps-md-5 pt-md-2">
            {/* <button className="btn hospital-draft-btn text-primary w-75 mt-1">
              {doctorDetails?.status ? doctorDetails?.status : "inactive"}
            </button> */}
            <StatusButton status={doctorDetails?.status ? doctorDetails?.status : "inactive"}/>
          </div>
        </div>

        <div className="row mt-4">
          {/* <div className="col-md-6">
            <ul className="personal-info address-info">
              <li className="d-flex align-items-center">
                <span className="address-header">Address</span>
                <span className="">:</span>
                <span className="ms-3 w-100 md-w-75 fw-semibold">
                  Lorem ipsum dolor sit amet consectetur lorem
                </span>
              </li>

              <li className="d-flex align-items-center">
                <span className="address-header">District</span>
                <span className="">:</span>
                <span className="ms-3 w-100 md-w-75 fw-semibold">Hydrabad</span>
              </li>

              <li className="d-flex align-items-center">
                <span className="address-header">State</span>
                <span className="">:</span>
                <span className="ms-3 w-100 md-w-75 fw-semibold">
                  Telengana
                </span>
              </li>
            </ul>
          </div> */}

          <div className="col-md-6">
            <div className="row border border-secondary-subtle pt-3 pb-1 ms-1 me-1">
              <div className="col">
                <ul className="payment-info w-1">
                  <li>
                    <span className="payment-title">
                      Account Number :{" "}
                      <span className="fw-semibold text-black">
                        {doctorDetails?.bank_details?.account_number}
                      </span>
                    </span>
                  </li>
                  <li className="mt-3 mb-3">
                    <span className="payment-title">
                      Bank Name :{" "}
                      <span className="fw-semibold text-black">
                        {doctorDetails?.bank_details?.bank_name}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
              <div className="col">
                <ul className="payment-info">
                  <li>
                    <span className="payment-title">
                      IFSC Code :{" "}
                      <span className="fw-semibold text-black">
                        {doctorDetails?.bank_details?.ifsc}
                      </span>
                    </span>
                  </li>
                  <li className="mt-3 mb-3">
                    <span className="payment-title">
                      UPI ID :{" "}
                      <span className="fw-semibold text-black">
                        {doctorDetails?.bank_details?.upi_id}
                      </span>
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col border border-secondary-subtle pt-3 pb-1 ms-1 me-1 mt-3 file-upload-card">
            <h5>Specialisation</h5>
            <div className="overflow-auto add-specialisation">
              {doctorDetails?.specialisations?.map((item) => (
                <div
                  className="border border-secondary-subtle p-2 mt-2"
                  key={item.id}
                >
                  {item.name}
                </div>
              ))}
            </div>
            {/* <div className="pt-2">
              <Link
                to
                className="hospital-draft-btn rounded text-primary ps-2 pe-2 pt-1 pb-1 text-primary"
              >
                Add New Row
              </Link>
            </div> */}
          </div>
          <div className="col-9 border border-secondary-subtle pt-3 pb-1 ms-1 me-1 mt-3 file-upload-card">
            <div className="row mb-1">
              <div className="col">
                <h5>Uploaded Documents</h5>
              </div>

              {/* <div className="col">
                <Link
                  to={`/manage-doctors/request/${id}/edit`}
                  className="d-flex justify-content-end"
                >
                  <img src={pencil_icon} alt="" />
                </Link>
              </div> */}
            </div>
            {/* <div className="mb-4"> */}
            {/* {[1, 2, 3].map((item) => {
                return (
                  <div className="row mt-2" key={`row${item}`}>
                    <div className="col-12 pt-2 col-md-2">
                      Documents 0{item}
                    </div>
                    <div className="col-12 col-md-10 md:mt-0 mt-1">
                      <div className="d-flex justify-content-between align-items-center file-upload-details ps-3 pe-3">
                        <div className="d-flex align-items-center">
                          <img src={pdf_icon} alt="pdf_icon" />
                          <div className="d-flex flex-column justify-content-center file-details ms-2">
                            <h6>Reg 0{item}</h6>
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
                );
              })} */}

            {doctorDocuments?.length > 0 && (
              <div className="row">
                {!documentLoading ? (
                  <div className="mb-4">
                    {doctorDocuments?.map((item, i) => {
                      console.log("ITEM ", item);

                      return (
                        <div className="row mt-2" key={`row${item?.id}`}>
                          <div className="col-12 pt-2 col-md-2">
                            Document {i + 1}
                          </div>
                          <div className="col-12 col-md-10 md:mt-0 mt-1">
                            <div className="d-flex justify-content-between align-items-center file-upload-details ps-3 pe-3">
                              <div className="d-flex align-items-center">
                                <img src={pdf_icon} alt="pdf_icon" />
                                <div className="d-flex flex-column justify-content-center file-details ms-2">
                                  <h6>{item.name}</h6>
                                  {/* <p>24MB</p> */}
                                </div>
                              </div>
                              <div className="d-flex">
                                <a
                                  className="m-1"
                                  href={`${item?.file}`}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  <img src={eye_icon} alt="" />
                                </a>
                                <a
                                  className="m-1"
                                  onClick={() =>
                                    handelDeleteDocumentClick(item.id)
                                  }
                                >
                                  <img src={cross_icon} alt="" />
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <ComponentLoader />
                )}
              </div>
            )}
            {/* </div> */}
          </div>
        </div>
      </div>
      {isLoading && <FullscreenLoader />}
      <ConfirmDelete show={show} setShow={setShow} title="Doctors" />
      <ToggleDisable
        show={disableshow}
        setShow={setdisableShow}
        setdisable={setdisable}
        disable={disable}
        title="Doctor"
      />
      <ConfirmDelete
        show={showDocumentDelete}
        setShow={setShowDocumentdelete}
        title="Document"
        handleDelete={handelDeleteDocument}
        isLoading={deleteLoading}
      />
    </div>
  );
}

DoctorRequestCard.propTypes = {
  doctorDetails: PropTypes.func,
  isLoading: PropTypes.bool,
};

export default DoctorRequestCard;
