import BookingsCard from "../../Hospitals/TotalBookings/BookingsCard";
import { useParams } from "react-router-dom";
import { useDoctorAppointments } from "../../../hooks/appointments/useDoctorAppointments";
import SearchDateTable from "../../Tables/SearchDateTable";
import { formatDate } from "../../configs/formatDate";
import { useState } from "react";

function DoctorsBookings() {
  const { id } = useParams();
  const [query, setQuery] = useState("");

  const handelQuery = (queryResult) => {
    setQuery(queryResult);
  };
  const { data: appointments, isLoading } = useDoctorAppointments(id, query);
  const bookinsDetails = [
    {
      id: 1,
      bookings: "12,000",
      dueStatus: "",
      operation: "Total Bookings",
    },
    {
      id: 2,
      bookings: "5000",
      dueStatus: "",
      operation: "Total Fast Tag Booking",
    },
    {
      id: 3,
      bookings: "12",
      dueStatus: "No Dues",
      operation: "Cancellation",
    },
  ];
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
      render: (item, record) => <div>{record.type}</div>,
    },
    {
      title: "DUE ISSUE",
      dataIndex: "createdAt",
      sorter: (a, b) => a.dueIssue.length - b.dueIssue.length,
      render: (item) => <div>{formatDate(item)}</div>,
    },
    {
      title: "STATUS",
      dataIndex: "status",
      render: (item) => (
        <div
          className={`${
            (item === "cancelled" && "delete-badge status-red") ||
            (item === "started" && "delete-badge status-orange") ||
            (item === "completed" || item === "accepted" && "delete-badge status-green")
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
      render: (item, record) => <div>₹ {record?.amount}</div>,
    },
    {
      title: "ACTIONS",
      dataIndex: "actions",
      render: () => <div>view</div>,
    },
  ];
  return (
    <div>
      <div className="row ">
        {bookinsDetails.map((item) => (
          <div
            key={item.id + item.operation}
            className="col-md-4 col-sm-6 col-lg-4 col-xl-4"
          >
            <BookingsCard data={item} />
          </div>
        ))}
      </div>

      <SearchDateTable
        data={appointments}
        isLoading={isLoading}
        handelQuery={handelQuery}
        columns={columns}
        title="Bookings"
      />
    </div>
  );
}

export default DoctorsBookings;
