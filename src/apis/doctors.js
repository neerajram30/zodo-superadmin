import apiClient from "./apiClient";

export const getDoctors = async () => {
  const response = await apiClient.get(`/doctors`);
  return response?.data?.data || [];
};

export const getDoctorById = async (id) => {
  const response = await apiClient.get(`/doctors/${id}`);
  return response?.data || {};
};

export const getDoctorsByQuery = async (query) => {
  const response = await apiClient.get(`/doctors?${query}`);
  return response?.data?.data || [];
};

export const addDoctors = async (doctorsData) => {
  const response = await apiClient.post("/doctors", doctorsData);
  return response.data;
};


export const editDoctor = async ({id, data}) => {
  const response = await apiClient.patch(`/doctors/${id}`, data);
  return response.data;
};

export const changeDoctorStatus = async ({id, data}) => {
  const response = await apiClient.patch(`/doctors/${id}/change-status`, data);
  return response.data;
};

export const getDoctorDocuments = async (id) => {
  const response = await apiClient.get(`/documents?doctor_id=${id}`);
  console.log("Response !",response?.data?.data);
  
  return response?.data?.data || [];
};