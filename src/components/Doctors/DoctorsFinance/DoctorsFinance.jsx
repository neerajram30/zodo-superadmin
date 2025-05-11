import { useState } from "react";
import OverViewCard from "../../Hospitals/OverViewCard";
import SearchDateTable from "../../Tables/SearchDateTable";
import { useParams } from "react-router-dom";
import { formatDate } from "../../configs/formatDate";
import { useDoctorSettlements } from "../../../hooks/settlements/useDoctorSettlement";
function DoctorsFinance() {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const { data: settlements, isLoading } = useDoctorSettlements(id, query);
  const handelQuery = (queryResult) => {
    setQuery(queryResult);
  };
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
    <div>
      <div className="row">
        {financeData.map((item) => (
          <OverViewCard
            varient="col-md-4 col-sm-6 col-lg-4 col-xl-4"
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

export default DoctorsFinance;
