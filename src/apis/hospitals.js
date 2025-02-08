import apiClient from "./apiClient";

export const addHospital = async (hospitalData) => {
  const response = await apiClient.post("/hospitals", hospitalData);
  return response.data;
};

export const getHospitals = async () => {
  try {
    const response = await apiClient.get("/hospitals");
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export const getHospital = async (id) => {
  const response = await apiClient.get(`/hospitals/${id}`);
  return response.data;
};
