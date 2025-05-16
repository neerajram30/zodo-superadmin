import apiClient from "./apiClient";

export const deleteDocument = async (id) => {
  const response = await apiClient.delete(`/documents/${id}`);
  return response.data;
};
