import React from "react";
import BookingsTable from "./BookingsTable";
import { fastTagList } from "../../configs/fastTagList";
import { useParams } from "react-router-dom";
import { useValidateId } from "../../../hooks/useValidateId";
import { useHospitalAppointmentsByquery } from "../../../hooks/appointments/useHospitalAppointmentsByquery";
function FastTags() {
  const { id } = useParams();
  const { validId } = useValidateId(id);
  const query = `is_fast_tag=true`
  const { data: appointments } = useHospitalAppointmentsByquery(validId, query);
  console.log("fasttag!!",appointments);
  
  return (
    <div>
      <BookingsTable data={fastTagList} />
    </div>
  );
}

export default FastTags;
