
import apiClient from "./apiClient";

export const getSpecializations = async () => {
  const response = await apiClient.get("/specialisations");
  return response.data;
};

export const addSpecialization = async (specialisationData) => {
  const response = await apiClient.post("/specialisations", specialisationData);
  return response.data;
};

export const editSpecialization = async (id, editedSpecialisation) => {
  const response = await apiClient.patch(`/specialisations/${id}`, editedSpecialisation);
  return response.data;
}