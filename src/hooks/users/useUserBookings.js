import { useQuery } from "@tanstack/react-query";
import { getUserBookings, getUserBookingsByQuery } from "../../apis/users";

export const useUserBookings = (id, query) => {
  return useQuery({
    queryKey: ["usersbookings", id, query], // Unique query key
    queryFn: ()=>query ? getUserBookingsByQuery(id, query) : getUserBookings(id),
  });
};
