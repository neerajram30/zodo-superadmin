import DataTable from "../../DataTables/DataTable";
import PropTypes from "prop-types";
import { getDateFromIso } from "../../configs/getDateFromISO";

function BookingsTable(props) {
  const { data, isLoading } = props;
  const columns = [
    {
      title: "Booking Id",
      dataIndex: "booking_id",
      sorter: (a, b) => a.id - b.id,
    },
    {
      title: "TRANSACTION NAME",
      dataIndex: "transactionName",
      sorter: (a, b) => a.transactionName.length - b.transactionName.length,
      render:(item, record)=>(
        <div>{record.type}</div>
      )
    },
    {
      title: "DUE ISSUE",
      dataIndex: "createdAt",
      sorter: (a, b) => a.dueIssue.length - b.dueIssue.length,
      render:(item)=>(
        <div>{getDateFromIso(item)}</div>
      )
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (item) => (
        <div
          className={`${
            (item === "cancelled" && "delete-badge status-red") ||
            (item === "started" && "delete-badge status-orange") ||
            (item === "completed" && "delete-badge status-green")
          }`}
        >
          {item}
        </div>
      ),
    },
    {
      title: "AMOUNT",
      dataIndex: "amount",
      sorter: (a, b) => a.amount.length - b.amount.length,
      render:(item,record)=>(
        <div>{record?.doctor?.pricing}</div>
      )
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
      render:()=>(
        <div>view</div>
      )
    },
  ];
  return (
    <div>
      {/* <div className="row mt-4">
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
          <ExportTable />
        </div>
      </div> */}
      <div>{/* <h5>{232} results found</h5> */}</div>

      <div className="table-responsive">
        <DataTable data={data} columns={columns} isLoading={isLoading}/>
      </div>
    </div>
  );
}

BookingsTable.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool
};

export default BookingsTable;
