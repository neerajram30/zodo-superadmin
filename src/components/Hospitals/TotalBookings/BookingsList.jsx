import React from "react";
import BookingsTable from "./BookingsTable";
// import { totalBookings } from "../../configs/totalBookings";
import { useParams } from "react-router-dom";
import { useValidateId } from "../../../hooks/useValidateId";
import { useHospitalAppointments } from "../../../hooks/appointments/useHospitalAppointments";

function BookingsList() {
  const { id } = useParams();
  const { validId } = useValidateId(id);
  const {data: appointments} = useHospitalAppointments(validId);
  return (
    <div>
      <BookingsTable data={appointments ?? []} />
    </div>
  );
}

export default BookingsList;
