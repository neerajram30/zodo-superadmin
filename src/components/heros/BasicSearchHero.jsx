import PropTypes from "prop-types";
import { useDebounce } from "../../hooks/useDebounce";
import { useEffect, useState } from "react";

function BasicSearchHero(props) {
  const { title, handleSearchterm } = props;

  const [searchTerm, setSearchterm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);
  useEffect(() => {
    handleSearchterm(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleSearchInput = (searchTerm) => {
    setSearchterm(searchTerm);
  };
  return (
    <div className="page-header invoices-page-header">
      <div className="d-flex flex-column flex-md-row">
        <div className="w-md-50 w-100 d-flex align-items-md-center flex-column flex-md-row">
          <div className="search-hero-header">
            <h3>{title}</h3>
          </div>
          <div className="ms-md-3 w-md-50">
            <div>
              <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                  onChange={(e) => handleSearchInput(e.target.value)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

BasicSearchHero.propTypes = {
  handleSearchterm: PropTypes.func,
  title: PropTypes.string,
};

export default BasicSearchHero;
