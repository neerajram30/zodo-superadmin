import apiClient from "./apiClient";

export const getHospitalSettlement = async (id) => {
  const response = await apiClient.get(
    `settlements?hospital_id=${id}`
  );
  return response?.data?.data ?? [];
};

export const getAllSettlements = async () => {
  const response = await apiClient.get(
    `settlements/admin`
  );
  return response?.data?.data ?? [];
};

export const getAllSettlementsByQuery = async (query) => {
  const response = await apiClient.get(
    `settlements/admin?name=${query}`
  );
  return response?.data?.data ?? [];
};

export const getSettlementStatuslist = async (query) => {
  const response = await apiClient.get(
    `settlements/admin?status=${query}`
  );
  return response?.data?.data ?? [];
};

export const changeSettlementStatus = async ({id, data}) => {
  const response = await apiClient.patch(`settlements/${id}/status`, data);
  return response.data;
};