import React from "react";
import SearchBox from "../searchbox/SearchBox";

function DoctorRequestHero() {
  return (
    <div className="page-header invoices-page-header mb-2">
      <div className="d-flex flex-column flex-md-row">
        <div className="w-50 d-flex align-items-center flex-column flex-md-row">
          <div className="search-hero-header">
            <h3>Doctors Requests</h3>
          </div>
          <div className="ms-3 w-50">
            <SearchBox />
          </div>
        </div>

        {/* <div className="w-50 d-flex align-items-center justify-content-end flex-column flex-md-row">
          <div className="w-25 d-flex justify-content-between ps-3 pe-3">
            <Link to="#" className="">
              <img src={pdficon} alt="#" />
            </Link>
            <Link to="#" className="">
              <img src={pdficon3} alt="#" />
            </Link>
            <Link to="#">
              <img src={pdficon4} alt="#" />
            </Link>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default DoctorRequestHero;
