import { useState } from "react";
import { useAllSettlements } from "../../hooks/settlements/useAllSettlements";
import DateSearchHero from "../heros/DateSearchHero";
import DataTable from "../DataTables/DataTable";
import FeatherIcon from "feather-icons-react/build/FeatherIcon";
import { formatDate } from "../configs/formatDate";
function History() {
  const [searchTerm, setsearchTerm] = useState("");
  const [date, setdate] = useState(null);
  const query =
    (searchTerm &&
      date &&
      `name=${searchTerm}&from_date=${date.startDate}&to_date=${date.endDate}`) ||
    (searchTerm && `name=${searchTerm}`) ||
    (date && `updated_at=${date}`) ||
    "";
  const { data: settlements, isLoading } = useAllSettlements(query);

  const handleDate = (date) => {
    setdate(date);
  };
  const handleSearchTerm = (search) => {
    setsearchTerm(search);
  };
  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "bookingid",
      // sorter: (a, b) => a.bookingid.length - b.bookingid.length,
    },
    {
      title: "Name",
      dataIndex: "transactionName",
      // sorter: (a, b) => a.patientname.length - b.patientname.length,
    },
    {
      title: "Payment mode",
      dataIndex: "type",
      // sorter: (a, b) => a.type.length - b.type.length,
    },
    {
      title: "Amount",
      dataIndex: "amount",
      // sorter: (a, b) => a.type.length - b.type.length,
      // render: (item) => <div>₹ {item}</div>,
    },
    {
      title: "Time",
      dataIndex: "updated_at",
      sorter: (a, b) => a.time.length - b.time.length,
      render: (item) => <div>{formatDate(item)}</div>,
    },
    {
      title: "Status",
      dataIndex: "status",
      // sorter: (a, b) => a.status.length - b.status.length,
      render: (item) => (
        <div
          className={`delete-badge ${
            (item === "cancelled" && "status-red") ||
            (item === "pending" && "status-orange") ||
            (item === "requested" && "status-orange") ||
            (item === "completed" && "status-green")
          }`}
        >
          {item}
        </div>
      ),
    },
    {
      title: <div className="d-flex justify-content-center">Action</div>,
      dataIndex: "action",
      render: () => (
        <div className="d-flex justify-content-center" title="Download">
          <i>
            <FeatherIcon icon="download-cloud" />
          </i>
        </div>
      ),
      // sorter: (a, b) => a.department.length - b.department.length,
    },
  ];
  return (
    <div>
      <div>
        <DateSearchHero
          handleDate={handleDate}
          handleSearch={handleSearchTerm}
        />
        <DataTable
          columns={columns}
          dataSource={settlements ? settlements : []}
          loading={isLoading}
        />
      </div>
    </div>
  );
}

export default History;
