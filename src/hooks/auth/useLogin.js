import { useMutation } from "@tanstack/react-query";
import { login } from "../../apis/auth";

export const useLogin = () => {
  return useMutation({
    mutationFn: login,
    // onSuccess: (data) => {
    //   //   authLogin(data.token); // Save token to context and localStorage
    //   // console.log(data);
    // },
    onError: (error) => {
      console.error("Login failed:", error);
    },
  });
};
