import { useQuery } from "@tanstack/react-query";
import { getAllUsers } from "../../apis/users";

export const useGetUsers = () => {
  return useQuery({
    queryKey: ["users"], // Unique query key
    queryFn: getAllUsers,
  });
};
