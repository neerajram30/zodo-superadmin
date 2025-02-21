import apiClient from "./apiClient";

export const getDoctors = async () => {
  const response = await apiClient.get("/doctors");
  console.log("API RESPONSE ",response);
  
  return response.data;
};
