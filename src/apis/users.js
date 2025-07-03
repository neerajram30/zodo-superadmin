import apiClient from "./apiClient";

export const getAllUsers = async () => {
  const response = await apiClient.get(`/users/admin?user_type=user`);
  return response?.data?.data;
};

export const getAllUsersByQuery = async (query) => {
  const response = await apiClient.get(`/users/admin?user_type=user&${query}`);
  console.log("Response ", response?.data?.data);
  return response?.data?.data;
};

export const updateUserStatus = async (id) => {
  const response = await apiClient.patch(`/users/${id}/toggle-active`);
  return response.data;
};


export const getUserBookings = async (id) => {
  const response = await apiClient.get(`/bookings/users/${id}`);
  console.log("Appoments ",response);
  
  return response?.data?.data;
};

export const getUserBookingsByQuery = async (id,query) => {
  const response = await apiClient.get(`/bookings/users/${id}?${query}`);  
  return response?.data?.data;
};
