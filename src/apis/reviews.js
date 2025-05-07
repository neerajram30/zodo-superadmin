import apiClient from "./apiClient";

export const getHospitalReview = async (id) => {
    const response = await apiClient.get(`/reviews?hospital_id=${id}`);
    return response?.data?.data || [];
  };