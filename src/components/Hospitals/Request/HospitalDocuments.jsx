import React from "react";
import { cross_icon, eye_icon, pdf_icon } from "../../imagepath";

function HospitalDocuments() {
  return (
    <div className="row border border-secondary-subtle pt-3 pb-1 ms-1 me-1 mt-3 file-upload-card">
      <div className="row mb-1">
        <div className="col">
          <h5>Uploaded Documents</h5>
        </div>
      </div>
      <div className="mb-4">
        {[1, 2, 3].map((item) => {
          return (
            <div className="row mt-2" key={`row${item}`}>
              <div className="col-12 pt-2 col-md-2">Documents 0{item}</div>
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
        })}
      </div>
    </div>
  );
}

export default HospitalDocuments;
