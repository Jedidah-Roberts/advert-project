import { apiClient } from "./config";

//get all adverts
export const apiFetchAdverts = async () => apiClient.get("/adverts");

//add an advert
export const apiCreateAd = async (payload) =>
  apiClient.post("/adverts", payload, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });

//get a single ad
export const apiFetchSingleAd = async (id) => apiClient.get(`/adverts/${id}`);

//edit ad
export const apiEditAd = async (id, payload) =>
  apiClient.put(`/adverts/${id}`, payload);

//delete ad
export const apiDeleteAd = async (id) => apiClient.delete(`/adverts/${id}`);

export const apiFetchVendorAd = async () =>
  apiClient.get(`/adverts/vendor/get-adverts`);
