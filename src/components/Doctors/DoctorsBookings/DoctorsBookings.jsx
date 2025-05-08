import React from "react";
import BookingsCard from "../../Hospitals/TotalBookings/BookingsCard";
import { useParams } from "react-router-dom";
import { useDoctorAppointments } from "../../../hooks/appointments/useDoctorAppointments";
import BookingsTable from "../../Hospitals/TotalBookings/BookingsTable";

function DoctorsBookings() {
  const { id } = useParams();
  const { data:appointments, isLoading } = useDoctorAppointments(id);
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

      <div className="card-box">
        <h5 className="text-black">Bookings</h5>
        
        <div>{/* <h5 className="text-black">{0} results found</h5> */}</div>
        <div className="table-responsive">
          <BookingsTable data={appointments ?? []} isLoading={isLoading} />
        </div>

      </div>
        
    </div>
  );
}

export default DoctorsBookings;
