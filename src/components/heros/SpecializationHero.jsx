import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddSpecialization from "../modals/AddSpecialization";
import { addicon } from "../imagepath";
import PropTypes from "prop-types";
import { useDebounce } from "../../hooks/useDebounce";

function SpecializationHero(props) {
  const { handelSearchTerm } = props;
  const [show, setShow] = useState(false);
  const [searchTerm, setSearchterm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);
  useEffect(() => {
    handelSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm]);
  return (
    <div className="page-header invoices-page-header mb-2 mt-3">
      <div className="d-flex flex-column flex-md-row">
        <div className="w-50 d-flex align-items-center flex-column flex-md-row">
          <div className="search-hero-header">
            <h3>Specialisation</h3>
          </div>
          <div className="ms-3 w-50">
            <div>
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  onChange={(e) => setSearchterm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="w-50 d-flex align-items-center justify-content-end flex-column flex-md-row">
          <div className="d-flex w-100 flex-column flex-md-row justify-content-end">
            {/* <Link
              to="#"
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="hospital-draft-btn rounded-pill text-primary specialization-upload-btn"
            >
              <img src={uploadfiles_icon} alt="upload" />
              <span className="ms-2 me-2"> Upload Files</span>
            </Link> */}
            <Link
              to
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="hospital-add-btn rounded-pill ms-1 text-white specialization-add-btn"
              onClick={() => setShow(true)}
            >
              <img src={addicon} alt="add" />
              <span className="ms-2 me-2"> Add Specialisation</span>
            </Link>
          </div>
        </div>
      </div>
      <AddSpecialization show={show} setShow={setShow} />
    </div>
  );
}
SpecializationHero.propTypes = {
  handelSearchTerm: PropTypes.func,
};

export default SpecializationHero;
