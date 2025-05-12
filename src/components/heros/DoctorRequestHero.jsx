import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { useDebounce } from "../../hooks/useDebounce";

function DoctorRequestHero(props) {
  const { handelSearchTerm } = props;
  const [searchTerm, setSearchterm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);
  useEffect(() => {
    handelSearchTerm(debouncedSearchTerm);
  }, [debouncedSearchTerm]);
  return (
    <div className="page-header invoices-page-header mb-2">
      <div className="d-flex flex-column flex-md-row">
        <div className="w-50 d-flex align-items-center flex-column flex-md-row">
          <div className="search-hero-header">
            <h3>Doctors Requests</h3>
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
      </div>
    </div>
  );
}

DoctorRequestHero.propTypes = {
  handelSearchTerm: PropTypes.func,
};
export default DoctorRequestHero;
