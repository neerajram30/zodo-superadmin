import React from "react";
import BookingsTable from "./BookingsTable";
import { useParams } from "react-router-dom";
import { useHospitalAppointmentsByquery } from "../../../hooks/appointments/useHospitalAppointmentsByquery";
import { useValidateId } from "../../../hooks/useValidateId";

function Cancellation() {
  const { id } = useParams();
  const { validId } = useValidateId(id);
  const query = `status=cancelled`;
  const { data: appointments } = useHospitalAppointmentsByquery(validId, query);
  return (
    <div>
      <BookingsTable data={appointments ?? []} />
    </div>
  );
}

export default Cancellation;
