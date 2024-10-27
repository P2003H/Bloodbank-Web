import axios from "axios";

const API = axios.create({ baseURL: "https://bloodbank-web-quln-edxsq8d77-p2003hs-projects.vercel.app/api/v1" });

API.interceptors.request.use((req) => {
  if (localStorage.getItem("token")) {
    req.headers.Authorization = `Bearer ${localStorage.getItem("token")} `;
  }
  return req;
});

export default API;
