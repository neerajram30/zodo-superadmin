import React from "react";
import OverViewCard from "../../Hospitals/OverViewCard";
import PropTypes from "prop-types";

function DoctorsOverview(props) {
  const { analytics } = props;
  const revenueOverview = [
    {
      id: 1,
      amount: `$ ${analytics?.settlement?.requested || 0}`,
      status: "No Dues",
      operation: "Settlement",
    },
    {
      id: 2,
      amount: `$ ${analytics?.settlement?.requested || 0}`,
      status: "No Dues",
      operation: "Requested Settlements",
    },
    {
      id: 3,
      amount: `$ ${analytics?.settlement?.total || 0}`,
      status: "No Dues",
      operation: "Total Balance",
    },
  ];
  return (
    <div>
      <div className="row">
        {revenueOverview.map((item) => (
          <OverViewCard
            varient="col-md-4 col-sm-6 col-lg-4 col-xl-4"
            data={item}
            key={item.id}
          />
        ))}
      </div>

      {/* <div className="card-box">
        <h5 className="text-black">Transactions</h5>
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
              <input
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="col-12 col-md-6 col-xl-3">
            <ExportTable/>
            
          </div>
        </div>
        <div>
          <h5 className="text-black">{232} results found</h5>
        </div>

        <div className="table-responsive">
          <TransactionTable />
        </div>
      </div> */}
    </div>
  );
}

// props validation
DoctorsOverview.propTypes = {
  analytics: PropTypes.object,
};

export default DoctorsOverview;
