import apiClient from "./apiClient";

export const getDoctors = async () => {
  const response = await apiClient.get("/doctors");
  return response.data;
};

export const addDoctors = async (doctorsData) => {
  const response = await apiClient.post("/doctors", doctorsData);
  return response.data;
};
