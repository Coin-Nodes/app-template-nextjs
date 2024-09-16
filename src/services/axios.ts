import axios from "axios";
import { parseCookies } from "nookies";

export function getAPIClient(cxt?: any) {
  const { "nextauth.token": token } = parseCookies(cxt);

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
  });

  if (token) {
    api.defaults.headers["Authorization"] = `Bearer ${token}`;
  }

  return api;
}
