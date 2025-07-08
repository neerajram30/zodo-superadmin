import { right_chevron } from "../imagepath";
import { useParams } from "react-router-dom";
import { useHospitalSettlements } from "../../hooks/settlements/useHospitalSettlements";
import { useState } from "react";
import SearchDateTable from "../Tables/SearchDateTable";
import { formatDate } from "fullcalendar/index.js";
import PropTypes from "prop-types";
import StatusBadge from "../assests/StatusBadge";
import { useFetchWallet } from "../../hooks/settlements/useFetchWallet";
function Finance(props) {
  const { analytics } = props;
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const handelQuery = (queryResult) => {
    setQuery(queryResult);
  };

  const { data: settlements, isLoading } = useHospitalSettlements(id, query);
  const { data: walletDetails } = useFetchWallet(id);
  console.log("Wallet details ",walletDetails);
  const requestedDate = walletDetails?.latest_settlement?.created_at;
  const status = walletDetails?.latest_settlement?.status;
  const columns = [
    {
      title: "TRANSATION ID",
      dataIndex: "transaction_id",
      // sorter: (a, b) => a.invoiceNumber.length - b.invoiceNumber.length,
    },
    {
      title: "DATE ISSUED",
      dataIndex: "created_at",
      render: (item) => <div>{formatDate(item)}</div>,
      // sorter: (a, b) => a.date.length - b.date.length,
    },
    // {
    //   title: "INVOICE#",
    //   dataIndex: "invoiceNumber",
    //   // sorter: (a, b) => a.invoiceNumber.length - b.invoiceNumber.length,
    // },
    {
      title: "PAYMENT METHOD",
      dataIndex: "payment_method",
      // sorter: (a, b) => a.transactionName.length - b.transactionName.length,
    },
    // {
    //   title: "DUE DATE",
    //   dataIndex: "dueDate",
    //   // sorter: (a, b) => a.dueDate.length - b.dueDate.length,
    // },
    {
      title: "APPROVED DATE",
      dataIndex: "approve_date",
      render: (item) => <div>{item ? formatDate(item) : "N/A"}</div>,
      // sorter: (a, b) => a.transactionName.length - b.transactionName.length,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      // sorter: (a, b) => a.status.length - b.status.length,
      render: (item) => (
        <div
          className={`${
            item === "failed" ||
            (item === "rejected" && "delete-badge status-red") ||
            (item === "requested" && "delete-badge status-orange") ||
            item === "completed" ||
            (item === "approved" && "delete-badge status-green")
          }`}
        >
          {item}
        </div>
      ),
    },
    {
      title: "TOTAL",
      dataIndex: "amount",
      render: (item) => <div>₹ {item}</div>,
      // sorter: (a, b) => a.total.length - b.total.length,
    },
  ];
  return (
    <div className="pb-3 mt-2">
      <div className="row pt-2">
        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget settlement-card">
            <div className="dash-content dash-count flex-grow-1">
              <h6>₹ {analytics?.settlement?.requested || 0}</h6>
              <div className="row">
                <div className="col">
                  <p>
                    <span className="text-black">Requested Amount</span>
                  </p>
                </div>
              </div>
              <div className="row">
               {requestedDate && <p className="col">Requested On {formatDate(requestedDate)}</p>}
              </div>
              <div className="mt-2">
                {/* <button
                  to=""
                  className="hospital-add-btn rounded-pill text-white border-0 text ps-3 pe-3 pt-1 pb-1 paid-btn"
                >
                  Paid Fully
                </button> */}
                <StatusBadge status={status} />
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget settlement-card pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>₹ {analytics?.settlement?.pending || 0}</h6>
              <p>
                <span className="text-danger custom-badge status-red">
                  NO DUES
                </span>
              </p>
            </div>
          </div>
        </div> */}

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget settlement-card pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>₹ {analytics?.settlement?.pending ?? 0}</h6>
              <div className="row">
                <div className="col">
                  <p>
                    <span className="text-black">Pending Settlement</span>
                  </p>
                </div>
                <div className="col-auto">
                  <img src={right_chevron} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget settlement-card pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>₹ 0</h6>
              <div className="row">
                <div className="col">
                  <p>
                    <span className="text-black">Total Revenue In Month</span>
                  </p>
                </div>
                <div className="col-auto">
                  <img src={right_chevron} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget settlement-card pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>₹ {analytics?.settlement?.total ?? 0}</h6>
              <div className="row">
                <div className="col">
                  <p>
                    <span className="text-black">Total Balance</span>
                  </p>
                </div>
                <div className="col-auto">
                  <img src={right_chevron} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget settlement-card">
            <div className="dash-content dash-count flex-grow-1">
              <h6>₹ {analytics?.settlement?.total || 0}</h6>
              <p>
                <span className="passive-view">No Dues</span>
              </p>
              <div className="row">
                <p className="text-dark mt-2 col">Total Balance</p>
                <div className="col-auto">
                  <img src={right_chevron} alt="#" />
                </div>
              </div>
            </div>
          </div>
        </div> */}
      </div>

      {/* Finance details */}
      <SearchDateTable
        data={settlements}
        isLoading={isLoading}
        handelQuery={handelQuery}
        columns={columns}
        title="Transactions"
      />
    </div>
  );
}

// props validation
Finance.propTypes = {
  analytics: PropTypes.object.isRequired,
};

export default Finance;
