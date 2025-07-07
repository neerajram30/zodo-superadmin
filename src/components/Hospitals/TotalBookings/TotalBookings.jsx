import React from "react";
import BookingsCard from "./BookingsCard";
import BookingTabs from "./BookingTabs";
import { useHospitalAppointments } from "../../../hooks/appointments/useHospitalAppointments";
import { useParams } from "react-router-dom";

function TotalBookings() {
  const { id } = useParams();
  const { data: bookings } = useHospitalAppointments(id);
  console.log("Bookings",bookings);
  
  const total = bookings?.length || 0;
  const fastTagBookings = bookings?.filter((item)=> item.is_fast_tag);
  const cancelledBookings = bookings?.filter((item) => item?.status === "cancelled");
  const fastTagBookingCount = fastTagBookings?.length || 0;
  const cancelledCount = cancelledBookings?.length || 0;
  const bookinsDetails = [
    {
      id: 1,
      bookings: total,
      dueStatus: "",
      operation: "Total Bookings",
    },
    {
      id: 2,
      bookings: fastTagBookingCount,
      dueStatus: "",
      operation: "Total Fast Tag Booking",
    },
    {
      id: 3,
      bookings: cancelledCount,
      dueStatus: "",
      operation: "Cancellation",
    },
  ];
  return (
    <div className="pb-3">
      <div className="row mt-2">
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
        <BookingTabs />
      </div>
    </div>
  );
}

export default TotalBookings;
