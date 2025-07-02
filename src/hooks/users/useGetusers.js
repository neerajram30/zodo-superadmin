import { useQuery } from "@tanstack/react-query";
import { getAllUsers, getAllUsersByQuery } from "../../apis/users";

export const useGetUsers = (query) => {
  return useQuery({
    queryKey: ["userslist", query], // Unique query key
    queryFn: ()=>query ? getAllUsersByQuery(query) : getAllUsers(),
  });
};
