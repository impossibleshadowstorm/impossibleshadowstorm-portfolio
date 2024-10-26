import axios, { AxiosRequestConfig } from "axios";

export const host: string = "/api/";

export function buildHeaders(): { Authorization: string } {
  const token = localStorage.getItem("token");
  return { Authorization: `Bearer ${token}` };
}

export async function get<T = any>(
  uri: string,
  params: Record<string, any> = {},
  options: AxiosRequestConfig = {}
): Promise<T> {
  const config: AxiosRequestConfig = {
    method: "GET",
    params,
    ...options,
  };
  const response = await axios.get<T>(`${host}${uri}`, config);
  return response.data;
}

export async function post<T = any>(
  uri: string,
  body: Record<string, any> = {}
): Promise<T> {
  const response = await axios.post<T>(`${host}${uri}`, body);
  return response.data;
}
