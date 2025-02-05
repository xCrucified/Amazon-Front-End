import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  timeout: 10000, // Таймаут 10 сек
  headers: {
    "Content-Type": "application/json",
  },
});

export default api;
