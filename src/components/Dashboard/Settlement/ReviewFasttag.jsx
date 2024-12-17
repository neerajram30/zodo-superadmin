import React from "react";
import Select from "react-select";
import FasttagToggle from "../../FasttagRevenue/FasttagToggle";
import { pencil_icon } from "../../imagepath";
import { Link, useParams } from "react-router-dom";

function ReviewFasttag() {
  const { id } = useParams();
  return (
    <div className="card-box">
      <div className="row">
        <div className="col">
          <h4 className="card-title">About Fast Tag</h4>
        </div>
        <div className="col d-flex justify-content-end">
          <Link to={`/manage-hospitals/manage-request/${id}/edit`}>
            <img src={pencil_icon} alt="edit" width={18} height={18} />
          </Link>
        </div>
      </div>

      <div className="d-flex mt-3">
        <label className="">Enable Fast Tag</label>
        <div className="ms-2">
          <FasttagToggle />
        </div>
      </div>

      <div className="row mt-3">
        <div className="col-md-6">
          <div className="form-group">
            <label>Choose Percentage of Profit</label>
            <Select
            // defaultValue={selectedOption}
            // onChange={setSelectedOption}
            // options={option}
            />
          </div>
        </div>
        <div className="col-md-6">
          <div className="form-group">
            <label>Fast tag Issue Per Day</label>
            <Select
            // defaultValue={selectedOption}
            // onChange={setSelectedOption}
            // options={option}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReviewFasttag;
