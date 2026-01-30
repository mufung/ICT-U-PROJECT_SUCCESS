// src/api/resultsApi.js
import { API_BASE } from "../config/api";

export async function fetchResults(status) {
  const response = await fetch(
    `${API_BASE}/results?status=${status}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch results");
  }

  return response.json();
}