import React from "react";
import { Link } from "react-router-dom";
import SearchBox from "../searchbox/SearchBox";

function SearchHero() {
  return (
    <div className="page-header invoices-page-header mt-2">
      <div className="row align-items-center">
        <div className="col-1">
          <h5>All Reviews</h5>
        </div>
        <div className="col-12 col-md">
          <div className="w-50">
            <SearchBox />
          </div>
        </div>
        <div className="col-auto">
          <div className="invoices-create-btn">
            <Link
              to="#"
              // data-bs-toggle="modal"
              // data-bs-target="#save_invocies_details"
              className="btn hospital-draft-btn rounded-pill text-primary"
            >
              Sort By
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchHero;
