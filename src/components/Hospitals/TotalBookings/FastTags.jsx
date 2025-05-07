import React from "react";
import BookingsTable from "./BookingsTable";
import { useParams } from "react-router-dom";
import { useValidateId } from "../../../hooks/useValidateId";
import { useHospitalAppointmentsByquery } from "../../../hooks/appointments/useHospitalAppointmentsByquery";
function FastTags() {
  const { id } = useParams();
  const { validId } = useValidateId(id);
  const query = `is_fast_tag=1`
  const { data: fastTagAppointments } = useHospitalAppointmentsByquery(validId, query);
  
  return (
    <div>
      <BookingsTable data={fastTagAppointments} />
    </div>
  );
}

export default FastTags;
