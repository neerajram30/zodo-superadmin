import apiClient from "./apiClient";

export const addBanner = async (bannerdata) => {
  const response = await apiClient.post("/banners", bannerdata);
  return response.data;
};

export const getBannerList = async () => {
  const response = await apiClient.get("/banners");
  return response?.data?.data || [];
};

export const viewBanner = async (id) => {
  const response = await apiClient.get(`/banners/${id}`);
  return response?.data?.data || [];
};

export const editBanner = async ({ id, data }) => {
  const response = await apiClient.put(`/banners/${id}`, data);
  return response?.data || {};
};

export const deleteBanner = async (id) => {
  const response = await apiClient.delete(`/banners/${id}`);
  console.log("delete response ",response?.data);
  
  return response?.data;
};

export const getAppdetails = async () => {
  const response = await apiClient.get("/app-details");
  return response?.data?.data;
};

export const createAppdetails = async (data) => {
  const response = await apiClient.post("/app-details", data);
  return response?.data;
};

export const updateAppdetails = async (data) => {
  const response = await apiClient.patch("/app-details", data);
  return response?.data;
};
