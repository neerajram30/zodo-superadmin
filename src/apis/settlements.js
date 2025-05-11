import apiClient from "./apiClient";

export const getHospitalSettlement = async (id) => {
  const response = await apiClient.get(
    `settlements?hospital_id=${id}`
  );
  return response?.data?.data ?? [];
};

export const getHospitalSettlementByquery = async (id,query) => {
  const response = await apiClient.get(
    `settlements?hospital_id=${id}&${query}`
  );
  return response?.data?.data ?? [];
};




export const getDoctorSettlements = async (id) => {
  const response = await apiClient.get(
    `settlements?doctor_id=${id}`
  );
  return response?.data?.data ?? [];
};

export const getDoctorSettlementsByQuery = async (id,query) => {
  const response = await apiClient.get(
    `settlements?doctor_id=${id}&${query}`
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
    `settlements/admin?${query}`
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