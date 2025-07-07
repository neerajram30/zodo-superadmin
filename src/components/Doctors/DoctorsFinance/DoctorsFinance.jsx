import { useState } from "react";
import SearchDateTable from "../../Tables/SearchDateTable";
import { useParams } from "react-router-dom";
import { formatDate } from "../../configs/formatDate";
import { useAllSettlements } from "../../../hooks/settlements/useAllSettlements";
import StatusBadge from "../../assests/StatusBadge";
function DoctorsFinance() {
  const { id } = useParams();
  const [query, setQuery] = useState("");
  const inputQuery = query ? `doctor_id=${id}&${query}` : `doctor_id=${id}`;

  const { data: settlements, isLoading } = useAllSettlements(inputQuery);
  
  const handelQuery = (queryResult) => {
    setQuery(queryResult);
  };
  // const financeData = [
  //   {
  //     id: 1,
  //     amount: `$ ${analytics?.settlement?.requested || 0}`,
  //     status: "No Dues",
  //     operation: "Settlement",
  //   },
  //   {
  //     id: 2,
  //     amount: `$ 20,000`,
  //     status: "No Dues",
  //     operation: "Total Revenue In Month",
  //   },
  //   {
  //     id: 3,
  //     amount: `$ ${analytics?.settlement?.total || 0}`,
  //     status: "No Dues",
  //     operation: "Total Balance",
  //   },
  // ];

  

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
      render: (item, record) => (
        <div
          
        >
          <StatusBadge status={record?.status}/>
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
    <div>
      {/* <div className="row">
        {financeData.map((item) => (
          <OverViewCard
            varient="col-md-4 col-sm-6 col-lg-4 col-xl-4"
            data={item}
            key={item.id}
          />
        ))}
      </div> */}
      <div className="mt-2">
        
      <SearchDateTable
        data={settlements}
        isLoading={isLoading}
        handelQuery={handelQuery}
        columns={columns}
        title="Transactions"
        />
        </div>
    </div>
  );
}


export default DoctorsFinance;
