import axios from "axios";

export const RequestApi = axios.create({
  baseURL: "https://kenziehub.herokuapp.com/",
  timeout: 5000,
  headers: { "Content-Type": "application/json" },
});
