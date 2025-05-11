import { useState } from "react";
import BookingsTable from "./BookingsTable";
// import { totalBookings } from "../../configs/totalBookings";
import { useParams } from "react-router-dom";
import DateSearchHero from "../../heros/DateSearchHero";
import { useHospitalAppointmentsByquery } from "../../../hooks/appointments/useHospitalAppointmentsByquery";

function BookingsList() {
  const { id } = useParams();
  const [searchTerm, setsearchTerm] = useState("");
  const [date, setdate] = useState(null);
  const query =
    (searchTerm &&
      date &&
      `name=${searchTerm}&from_date=${date.startDate}&to_date=${date.endDate}`) ||
    (searchTerm && `name=${searchTerm}`) ||
    (date && `from_date=${date.startDate}&to_date=${date.endDate}`) ||
    "";

  const { data: appointments, isLoading } = useHospitalAppointmentsByquery(id, query);

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
      <BookingsTable data={appointments ?? []} isLoading={isLoading} />
    </div>
  );
}

export default BookingsList;
