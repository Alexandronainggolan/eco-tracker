// src/services/localStorageService.js

const STORAGE_KEY = "eco_tracker_data";

export const saveTrackerData = (data) => {
  localStorage.setItem(
    STORAGE_KEY,
    JSON.stringify(data)
  );
};

export const getTrackerData = () => {
  const data = localStorage.getItem(STORAGE_KEY);

  return data ? JSON.parse(data) : null;
};

export const clearTrackerData = () => {
  localStorage.removeItem(STORAGE_KEY);
};