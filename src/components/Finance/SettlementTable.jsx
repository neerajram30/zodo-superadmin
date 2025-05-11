import { useSetSettlementStatusList } from "../../hooks/settlements/useGetSettlementStatusList";
import DataTable from "../DataTables/DataTable";
import {formatDate} from '../configs/formatDate';
import { Link } from "react-router-dom";
function SettlementTable() {
  const status = "requested";
  const { data, isLoading } = useSetSettlementStatusList(status);
  const columns = [
    {
      title: "Transaction ID",
      dataIndex: "bookingid",
    },
    {
      title: "Name",
      dataIndex: "transactionName",
    },
    {
      title: "Payment mode",
      dataIndex: "type",
    },
    {
      title: "Amount",
      dataIndex: "amount",
    },
    {
      title: "Time",
      dataIndex: "updated_at",
      // sorter: (a, b) => a.time.length - b.time.length,
      render: (item) => <div>{formatDate(item)}</div>,
    },
    {
      title: "Status",
      dataIndex: "status",
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
        <div className="d-flex justify-content-center" title="View">
          {/* <i>
            <FeatherIcon icon="download-cloud" />
          </i> */}
          view
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
        dataSource={data ?? []}
        isLoading={isLoading}
      />
    </div>
  );
}

export default SettlementTable;
