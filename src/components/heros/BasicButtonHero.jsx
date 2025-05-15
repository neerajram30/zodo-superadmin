import { Link, useNavigate } from "react-router-dom";
import { addicon, arrow_left } from "../imagepath";
import PropTypes from "prop-types";

function BasicButtonHero(props) {
  const { handleButtonClick, title, buttonTitle } = props;
  const navigate = useNavigate();
  return (
    <div className="card-box profile-header mb-3 mt-3 d-flex align-items-center justify-content-between">
      <div className="basic-hero-header">
        <Link
          to
          onClick={() => navigate(-1)}
        >
          <img src={arrow_left} alt="" />
        </Link>
        <span className="ms-3">{title}</span>
      </div>

      <div className="invoices-create-btn d-flex justify-content-md-end">
        <Link
          to
          className="hospital-add-btn rounded-pill ms-1 text-white ps-4 pe-4 pt-2 pb-2"
          onClick={() => handleButtonClick()}
        >
          <img src={addicon} alt="add" />
          <span className="ms-2 me-2">{buttonTitle}</span>
        </Link>
      </div>
    </div>
  );
}

BasicButtonHero.propTypes = {
  handleButtonClick: PropTypes.func,
  title: PropTypes.string,
  buttonTitle: PropTypes.string,
};

export default BasicButtonHero;
