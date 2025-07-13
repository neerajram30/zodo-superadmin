import { useState } from "react";
import BookingsTable from "./BookingsTable";
// import { totalBookings } from "../../configs/totalBookings";
import { useParams } from "react-router-dom";
import DateSearchHero from "../../heros/DateSearchHero";
import { useHospitalAppointmentsByquery } from "../../../hooks/appointments/useHospitalAppointmentsByquery";
import { generateDateQuery } from "../../configs/generateDateQuery";

function BookingsList() {
  const { id } = useParams();
  const [dateQuery, setDateQuery] = useState("");
  const { data: appointments, isLoading } = useHospitalAppointmentsByquery(
    id,
    dateQuery
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
        query={dateQuery}
      />
      <BookingsTable data={appointments ?? []} isLoading={isLoading} />
    </div>
  );
}

export default BookingsList;
