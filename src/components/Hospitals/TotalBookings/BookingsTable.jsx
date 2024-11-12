import { DatePicker } from "antd";
import React from "react";
import DataTable from "../../DataTables/DataTable";
import PropTypes from "prop-types";

function BookingsTable(props) {
  const { data, columns } = props;
  return (
    <div className="card-box">
      <div className="row mt-4">
        <div className="col-12 col-md-6 col-xl-3">
          <div className="form-group local-forms cal-icon">
            <DatePicker
              className="form-control datetimepicker"
              // onChange={onChange}
              suffixIcon={null}
            />
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="form-group local-forms">
            <input type="text" className="form-control" placeholder="Search" />
          </div>
        </div>
        <div className="col-12 col-md-6 col-xl-3">
          <div className="form-group local-forms">
            <div className="outlined-btn form-control">Export</div>
          </div>
        </div>
      </div>
      <div>{/* <h5>{232} results found</h5> */}</div>

      <div className="table-responsive">
        <DataTable data={data} columns={columns}/>
      </div>
    </div>
  );
}

BookingsTable.propTypes = {
  columns: PropTypes.node,
  data: PropTypes.node,
};

export default BookingsTable;
