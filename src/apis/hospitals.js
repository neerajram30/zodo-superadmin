/**
 * @file hospitals.js
 * @description This module provides functions to interact with the hospitals API.
 * It includes functions to add, retrieve, edit, and delete hospital records.
 *
 * @module hospitals
 */

import apiClient from "./apiClient";

/**
 * Adds a new hospital.
 * @async
 * @function addHospital
 * @param {Object} hospitalData - The data of the hospital to be added.
 * @returns {Promise<Object>} The added hospital data.
 */

export const addHospital = async (hospitalData) => {
  const response = await apiClient.post("/hospitals", hospitalData);
  return response.data;
};

/**
 * Retrieves all hospitals.
 * @async
 * @function getHospitals
 * @returns {Promise<Array>} A list of all hospitals.
 */

export const getHospitals = async () => {
  const response = await apiClient.get("/hospitals");
  return response.data;
};

/**
 * Retrieves a specific hospital by ID.
 * @async
 * @function getHospital
 * @param {string} id - The ID of the hospital to retrieve.
 * @returns {Promise<Object>} The data of the retrieved hospital.
 */

export const getHospital = async (id) => {
  const response = await apiClient.get(`/hospitals/${id}`);
  console.log("response", response.data);

  return response.data;
};

/**
 * Edits an existing hospital.
 * @async
 * @function editHospital
 * @param {string} id - The ID of the hospital to edit.
 * @param {Object} editedHospital - The new data for the hospital.
 * @returns {Promise<Object>} The updated hospital data.
 */

export const editHospital = async (id, editedHospital) => {
  const response = await apiClient.patch(`/hospitals/${id}`, editedHospital);
  return response.data;
};

/**
 * Deletes a hospital by ID.
 * @async
 * @function deleteHospital
 * @param {string} id - The ID of the hospital to delete.
 * @returns {Promise<Object>} The data of the deleted hospital.
 */

export const deleteHospital = async (id) => {
  const response = await apiClient.delete(`/hospitals/${id}`);
  return response.data;
};
