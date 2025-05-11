import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { addicon } from "../imagepath";
import PropTypes from "prop-types";
import { useDebounce } from "../../hooks/useDebounce";
import TransparentTabs from "../tabs/TransparentTabs";

function HospitalHero(props) {
  const { tabData, handleSearch } = props;
  const [searchTerm, setSearchterm] = useState("");
  const debouncedSearchTerm = useDebounce(searchTerm);

  useEffect(() => {
    handleSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm]);

  const handleSearchterm = (e) => {
    const searchTerm = e.target.value;
    setSearchterm(searchTerm);
    // handleSearch(searchTerm?.toLowerCase());
  };
  return (
    <>
      <div className="page-header invoices-page-header mt-3">
        <div className="row align-items-center">
          <div className="col-12 col-md-3 ms-md-3">
            <div className="doctor-list-search">
              <div className="search-container">
                <div className="hero-search-container">
                  <div className="form-group has-search">
                    <span className="fa fa-search form-control-feedback"></span>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search"
                      onChange={handleSearchterm}
                    />
                  </div>
                </div>
                {/* <SearchBox onChangeHandler={handleSearch}/> */}
              </div>
            </div>
          </div>
          <div className="col-md col-sm-12">
            <div className="invoices-create-btn d-flex justify-content-md-end">
              <Link
                to="/manage-hospitals/add-hospital"
                // data-bs-toggle="modal"
                // data-bs-target="#save_invocies_details"
                className="hospital-add-btn rounded-pill ms-1 text-white ps-4 pe-4 pt-2 pb-2"
              >
                <img src={addicon} alt="add" />
                <span className="ms-2 me-2">Add Hospital</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="pb-2">
        <TransparentTabs tabData={tabData} />
      </div>
    </>
  );
}

HospitalHero.propTypes = {
  tabData: PropTypes.array,
  handleSearch: PropTypes.func,
};

export default HospitalHero;
