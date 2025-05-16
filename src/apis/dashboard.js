import apiClient from "./apiClient";

export const getDashboardData = async () => {
  const response = await apiClient.get(`/dashboard/counts`);
  return response?.data || {};
};

export const getAnalyticsData = async () => {
  const response = await apiClient.get(`/dashboard/bookings-by-month`);
  return response?.data || [];
};
