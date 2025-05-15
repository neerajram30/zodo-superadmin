import apiClient from "./apiClient";

export const addBanner = async (bannerdata) => {
  const response = await apiClient.post("/banners", bannerdata);
  return response.data;
};

export const getBannerList = async () => {
  const response = await apiClient.get("/banners");
  return response?.data?.data || [];
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
