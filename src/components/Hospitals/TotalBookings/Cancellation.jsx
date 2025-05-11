import { useState } from "react";
import BookingsTable from "./BookingsTable";
import { useParams } from "react-router-dom";
import { useHospitalAppointmentsByquery } from "../../../hooks/appointments/useHospitalAppointmentsByquery";
import DateSearchHero from "../../heros/DateSearchHero";

function Cancellation() {
  const { id } = useParams();
  const [searchTerm, setsearchTerm] = useState("");
  const [date, setdate] = useState(null);
  const query =
    (searchTerm &&
      date &&
      `name=${searchTerm}&from_date=${date.startDate}&to_date=${date.endDate}`) ||
    (searchTerm && `name=${searchTerm}`) ||
    (date && `from_date=${date.startDate}&to_date=${date.endDate}`) ||
    "" + "status=cancelled";

  const { data: appointments } = useHospitalAppointmentsByquery(id, query);
  const handleDate = (date) => {
    setdate(date);
  };
  const handleSearchTerm = (search) => {
    setsearchTerm(search);
  };
  return (
    <div>
      <DateSearchHero
        handleDate={handleDate}
        handleSearchTerm={handleSearchTerm}
      />
      <BookingsTable data={appointments ?? []} />
    </div>
  );
}

export default Cancellation;
