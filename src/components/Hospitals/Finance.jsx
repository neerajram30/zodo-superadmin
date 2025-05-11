import { right_chevron } from "../imagepath";
import OverViewCard from "./OverViewCard";
import { useParams } from "react-router-dom";
import { useHospitalSettlements } from "../../hooks/settlements/useHospitalSettlements";
import { useState } from "react";
import SearchDateTable from "../Tables/SearchDateTable";
import { formatDate } from "../configs/formatDate";
function Finance() {
  const { id } = useParams();
  const [query, setQuery] = useState("");

  const handelQuery = (queryResult) => {
    setQuery(queryResult);
  };
  const { data: settlements, isLoading } = useHospitalSettlements(id, query);
  const financeData = [
    {
      id: 1,
      amount: "$ 20,000",
      status: "No Dues",
      operation: "Settlement",
    },
    {
      id: 2,
      amount: "$ 20,000",
      status: "No Dues",
      operation: "Total Revenue In Month",
    },
    {
      id: 3,
      amount: "$ 2000",
      status: "No Dues",
      operation: "Total Balance",
    },
    {
      id: 4,
      amount: "20%",
      status: "No Dues",
      operation: "Fast Tag Commission %",
    },
    {
      id: 5,
      amount: "4",
      status: "",
      operation: "Department",
    },
    {
      id: 6,
      amount: "$ 20,000",
      status: "No Dues",
      operation: "Fast Tag Revenue",
    },
  ];

  const columns = [
    {
      title: "DATE ISSUED",
      dataIndex: "created_at",
      render: (item) => <div>{formatDate(item)}</div>,
      // sorter: (a, b) => a.date.length - b.date.length,
    },
    {
      title: "INVOICE#",
      dataIndex: "invoiceNumber",
      // sorter: (a, b) => a.invoiceNumber.length - b.invoiceNumber.length,
    },
    {
      title: "TRANSACTION NAME",
      dataIndex: "transactionName",
      // sorter: (a, b) => a.transactionName.length - b.transactionName.length,
    },
    {
      title: "DUE DATE",
      dataIndex: "dueDate",
      // sorter: (a, b) => a.dueDate.length - b.dueDate.length,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      // sorter: (a, b) => a.status.length - b.status.length,
      render: (item) => (
        <div
          className={`${
            (item === "failed" && "delete-badge status-red") ||
            (item === "requested" && "delete-badge status-orange") ||
            (item === "completed" && "delete-badge status-green")
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
    {
      title: "BALANCE",
      dataIndex: "balance",
      // sorter: (a, b) => a.balance.length - b.balance.length,
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
    },
  ];
  return (
    <div className="pb-3">
      <div className="row pt-2">
        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget h-75">
            <div className="dash-content dash-count flex-grow-1">
              <h6>$ 20,000</h6>
              <p>
                <span className="delete-badge status-orange">
                  REQUESTED AMOUNT
                </span>
              </p>
              <div className="row">
                <p className="col">Requested On 24-11-2024</p>
              </div>
              <div>
                <button
                  to="#"
                  data-bs-toggle="modal"
                  data-bs-target="#save_invocies_details"
                  className="hospital-add-btn rounded-pill text-white border-0 text ps-3 pe-3 pt-1 pb-1 paid-btn"
                >
                  Paid Fully
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget h-75 pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>$ 0</h6>
              <p>
                <span className="text-danger custom-badge status-red">
                  NO DUES
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="col-md-4 col-sm-6 col-lg-3 col-xl-3">
          <div className="dash-widget h-75 pt-5">
            <div className="dash-content dash-count flex-grow-1">
              <h6>$ 20,000</h6>
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
          <div className="dash-widget h-75">
            <div className="dash-content dash-count flex-grow-1">
              <h6>$ 20,000</h6>
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
        </div>
      </div>

      {/* Finance details */}

      <div className="row finance-card-container">
        {financeData.map((item) => (
          <OverViewCard
            varient="col-md-4 col-sm-6 col-lg-4 col-xl-4 finance-card"
            data={item}
            key={item.id}
          />
        ))}
      </div>
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

export default Finance;
