// src/services/api.ts
import axios from "axios";

const API_URL = import.meta.env.VITE_API_URL;

export const api = axios.create({
  baseURL: API_URL,
});

// Example: Fetch exams
export const fetchExams = async () => {
  const response = await api.get("/exams");
  return response.data;
};