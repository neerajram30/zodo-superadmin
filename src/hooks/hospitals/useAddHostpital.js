import { useMutation } from "@tanstack/react-query";
import { addHospital } from "../../apis/hospitals";

export const useAddHostpital = () => {
  return useMutation({
    mutationFn: addHospital,
    onSuccess: (data) => {
      //   authLogin(data.token); // Save token to context and localStorage
      console.log(data);
    },
    onError: (error) => {
      console.error("hospital creation failed", error);
    },
  });
};
