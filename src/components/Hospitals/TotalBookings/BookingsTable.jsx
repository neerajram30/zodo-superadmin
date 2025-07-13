import DataTable from "../../DataTables/DataTable";
import PropTypes from "prop-types";
import StatusBadge from "../../assests/StatusBadge";
import { formatToDate } from "../../configs/formatToDate";
import { formatTime } from "../../configs/formatTime";

function BookingsTable(props) {
  const { data, isLoading } = props;
  const columns = [
    {
      title: "Booking ID",
      dataIndex: "booking_id",
    },
    {
      title: "Type",
      dataIndex: "type",
    },
    {
      title: "Patient Name",
      dataIndex: "patientname",
      render: (_item, record) => (
        <div>{record?.user_details?.name ?? record?.user?.first_name}</div>
      ),
    },
    {
      title: <div>Assigned Doctor</div>,
      dataIndex: "assingned",
      render: (_item, record) =>
        record?.doctor?.name ? (
          <div className="text-start">Dr.{record?.doctor?.name}</div>
        ) : (
          <div>N/A</div>
        ),
    },

    {
      title: "Time Slot",
      dataIndex: "timeSlot",
      render: (_item, record) => (
        <div>{formatTime(record?.timeSlot) ?? "unassigned"}</div>
      ),
    },
    {
      title: <div className="text-center">Appointment Date</div>,
      dataIndex: "appointmentDate",
      render: (item) => <div className="text-center">{formatToDate(item)}</div>,
    },
    {
      title: <div className="text-center">Status</div>,
      dataIndex: "status",
      render: (item) => (
        <div className="d-flex justify-content-center">
          <StatusBadge status={item} />
        </div>
      ),
    },
    // {
    //   title: "Actions",
    //   dataIndex: "actions",
    //   render: (_item, record) => {
    //     return (
    //       <div style={{ display: "flex", gap: 8, paddingLeft: "20px" }}>
    //         <Link
    //           to="#"
    //           onClick={(e) => {
    //             e.preventDefault();
    //             generateCaseSheetPDF(record);
    //           }}
    //           title="Print Case Sheet"
    //         >
    //           <img src={printericon} alt="Print Icon" width={17} />
    //         </Link>
    //       </div>
    //     );
    //   },
    // },
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
        <DataTable data={data} columns={columns} isLoading={isLoading} />
      </div>
    </div>
  );
}

BookingsTable.propTypes = {
  data: PropTypes.array,
  isLoading: PropTypes.bool,
};

export default BookingsTable;
