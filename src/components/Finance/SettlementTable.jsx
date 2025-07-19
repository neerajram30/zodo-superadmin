import { useAllSettlements } from "../../hooks/settlements/useAllSettlements";
import DataTable from "../DataTables/DataTable";
import { Link } from "react-router-dom";
import { formatToDate } from "../configs/formatToDate";
import StatusBadge from "../assests/StatusBadge";
function SettlementTable() {
  const query = `status=requested&limit=5`
  const { data, isLoading } = useAllSettlements(query);
  const sortedData = data?.sort((a, b) => {
  const dateA = new Date(a?.request_date).getTime(); // Convert to milliseconds
  const dateB = new Date(b?.request_date).getTime(); // Convert to milliseconds
  return dateB - dateA;
});
  console.log("Sorted data ",sortedData);
  
  const columns = [
      {
        title: "Initiated by",
        dataIndex: "",
        render: (item, record) => (
          <div className="d-flex align-items-center">
            {record?.user?.first_name || "N/A"}
          </div>
        ),
        // sorter: (a, b) => a.patientname.length - b.patientname.length,
      },
      {
        title: "Amount",
        dataIndex: "amount",
        render: (item) => <div>{item || "N/A"}</div>,
        // sorter: (a, b) => a.patientname.length - b.patientname.length,
      },
      {
        title: <div className="text-center">Payment mode</div>,
        dataIndex: "payment_type",
        // sorter: (a, b) => a.type.length - b.type.length,
        render: (item) => (
          <div className="text-center">{item ? item : "unknown"}</div>
        ),
      },
      {
        title: "Request Date",
        dataIndex: "request_date",
        // sorter: (a, b) => a.time.length - b.time.length,
        render: (item) => <div>{formatToDate(item)}</div>,
        sorter: (a, b) => new Date(a.updated_at) - new Date(b.updated_at),
        sortDirections: ["descend", "ascend"],
      },
      {
        title: <div className="text-center">Status</div>,
        dataIndex: "status",
        // sorter: (a, b) => a.status.length - b.status.length,
        render: (item) => (
          <div className="d-flex justify-content-center">
            <StatusBadge status={item} />
          </div>
        ),
      },
    ];
  return (
    <div className="card-box">
      <div className="d-flex justify-content-between pb-2">
        <h4>Recent Settlemet Requests</h4>
        <Link to="/dashboard/settlement-requests">
          See all
        </Link>
      </div>
      <DataTable
        columns={columns}
        data={sortedData ?? []}
        isLoading={isLoading}
      />
    </div>
  );
}

export default SettlementTable;
