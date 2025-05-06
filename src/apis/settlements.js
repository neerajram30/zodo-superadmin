import apiClient from "./apiClient";

export const getHospitalSettlement = async (id) => {
  const response = await apiClient.get(
    `settlements?hospital_id=${id}&page=1&limit=10`
  );
  return response.data;
};
