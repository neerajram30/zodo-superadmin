import PropTypes from "prop-types";
import { Modal } from "react-bootstrap";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
function ContactHospital(props) {
  const { show, setShow, data } = props;

  return (
    <Modal
      show={show}
      onHide={() => setShow(false)}
      size="md"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      backdropClassName="hospital-modal-backdrop"
    >
      <Modal.Header closeButton className="border-0">
        <Modal.Title>{data?.name}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="ms-3 mb-3">
          {data?.contact_details?.mobile && (
            <div className="d-flex align-items-center">
              <button className="btn social-icon bg-primary text-white">
                <i className="feather-facebook">
                  <FeatherIcon icon="phone" />
                </i>
              </button>
              <h6 className="contact-details ms-3">
                {data?.contact_details?.mobile}
              </h6>
            </div>
          )}

          {data?.contact_details?.website && (
            <div className="d-flex align-items-center mt-2">
              <button className="btn social-icon bg-primary text-white">
                <i className="feather-facebook">
                  <FeatherIcon icon="link" />
                </i>
              </button>
              <h6 className="contact-details ms-3">
                {data?.contact_details?.website}
              </h6>
            </div>
          )}

          {data?.contact_details?.email && (
            <div className="d-flex align-items-center mt-2">
              <button className="btn social-icon bg-primary text-white">
                <i className="feather-facebook">
                  <FeatherIcon icon="mail" />
                </i>
              </button>
              <h6 className="contact-details ms-3">
                {data?.contact_details?.email}
              </h6>
            </div>
          )}
        </div>
      </Modal.Body>
    </Modal>
  );
}

ContactHospital.propTypes = {
  show: PropTypes.bool.isRequired,
  setShow: PropTypes.func.isRequired,
  data: PropTypes.object,
};

export default ContactHospital;
