import apiClient from "./apiClient";

export const getHospitalSettlement = async (id) => {
  const response = await apiClient.get(
    `settlements?hospital_id=${id}`
  );
  return response?.data?.data ?? [];
};
