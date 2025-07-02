import apiClient from "./apiClient";

export const getAllUsers = async () => {
  const response = await apiClient.get(`/users/admin?user_type=user`);
  console.log("Response ",response?.data?.data);
  
  return response?.data?.data;
};

export const getAllUsersByQuery = async (query) => {
  const response = await apiClient.get(`/users/admin?user_type=user&${query}`);
  console.log("Response ",response?.data?.data);
  
  return response?.data?.data;
};