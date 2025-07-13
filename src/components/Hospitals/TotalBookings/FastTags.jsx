import { useState } from "react";
import BookingsTable from "./BookingsTable";
import { useParams } from "react-router-dom";
import { useHospitalAppointmentsByquery } from "../../../hooks/appointments/useHospitalAppointmentsByquery";
import DateSearchHero from "../../heros/DateSearchHero";
import { generateDateQuery } from "../../configs/generateDateQuery";
function FastTags() {
  const { id } = useParams();
  const [dateQuery, setDateQuery] = useState("");
  const query = dateQuery ? `type=fast_tag&${dateQuery}` : `type=fast_tag`
  const { data: appointments, isLoading } = useHospitalAppointmentsByquery(
    id,
    query
  );
  const handleDate = (date) => {
    const query = generateDateQuery(date);
    setDateQuery(query);
  };
  return (
    <div>
      <DateSearchHero
        handleDate={handleDate}
        type="appointment"
        query={`?${query}`}
      />
      <BookingsTable data={appointments} isLoading={isLoading} />
    </div>
  );
}

export default FastTags;
