import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { login } from "../../apis/auth";
import PropTypes from "prop-types";
import { useGetUser } from "./useGetUser";
// import { login, logout, getUser } from "./authService";

// Create Context for Authentication
const AuthContext = createContext();

// Auth Provider Component
export const AuthProvider = ({ children }) => {
  const queryClient = useQueryClient();
  const [user, setUser] = useState(null);
  const [validationError, setValidationError] = useState(null);
  const { mutate: getUser } = useGetUser();
  // Fetch user data when the component mounts
  const fetchUserData = async () => {
    const token = localStorage.getItem("token"); // Get the token from local storage
    if (token) {
      const user = await getUser(); // Fetch user data if token exists
      // console.log("User data from local storage", user);
      setUser(user?.data?.data);
      const type = user?.data?.data?.user_type;
      if(type !== "superAdmin"){
        localStorage.removeItem("token");
      }
      
    } else {
      setUser(null); // Set user to null if no token is found
    }
  };
  useEffect(() => {
    fetchUserData();
  }, []);

  // Login mutation
  const loginMutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      localStorage.setItem("token", data?.data?.tokens?.accessToken);
      setUser(data.data);
      queryClient.invalidateQueries(["user"]); // Refresh user data
    },
    onError: (error) => {
      const errorMessage = error?.response?.data?.message;
      setValidationError(errorMessage || "Something went wrong");
    },
  });
  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading: loginMutation.isPending,
        login: loginMutation.mutate,
        validationError,
        setUser
        // logout: logoutMutation.mutate,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

// Custom hook to use authentication
export const useAuth = () => {
  return useContext(AuthContext);
};
