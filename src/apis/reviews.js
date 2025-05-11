import apiClient from "./apiClient";

export const getHospitalReview = async (id) => {
  const response = await apiClient.get(`/reviews?hospital_id=${id}`);
  return response?.data?.data || [];
};

export const getHospitalReviewByQuery = async (id, query) => {
  const response = await apiClient.get(`/reviews?hospital_id=${id}&${query}`);
  return response?.data?.data || [];
};

export const removeReview = async (id) => {
  const response = await apiClient.delete(`/reviews/${id}`);
  return response?.data || {};
};
