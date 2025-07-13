import { Link } from "react-router-dom";
import { addicon } from "../imagepath";
import PropTypes from "prop-types";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useState } from "react";

function DoctorListHero(props) {
  const { handelSearchTerm } = props;
  const [searchTerm, setSearchterm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);
  useEffect(() => {
    handelSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm]);
  return (
    <div className="page-header invoices-page-header mb-2">
      <div className="d-flex flex-column flex-md-row">
        <div className="w-md-50 w-100 d-flex align-items-md-center flex-column flex-md-row">
          <div className="search-hero-header">
            <h3>Doctors List</h3>
          </div>
          <div className="ms-md-3 w-md-50">
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

        <div className="w-md-50 w-75 d-flex align-items-md-center justify-content-end flex-column flex-md-row">
          <div className="d-flex w-100 flex-column flex-md-row">
            <Link
              to="/manage-doctors/specialization"
              className="hospital-draft-btn rounded-pill text-primary doctor-list-btn-manage"
            >
              Manage Specialisation
            </Link>
            <Link
              to="/manage-doctors/add-doctors"
              className="hospital-add-btn rounded-pill ms-1 text-white doctor-list-btn-add mt-md-0 mt-3"
            >
              <img src={addicon} alt="add" />
              <span className="ms-2 me-2">Add Doctor</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

DoctorListHero.propTypes = {
  handelSearchTerm: PropTypes.func,
};

export default DoctorListHero;
