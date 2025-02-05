import apiClient from "./apiClient";

export const getDepartmentList = async (id) => {
  const response = await apiClient.get(`/departments/?hospital_id=${id}`);
  return response.data;
};
