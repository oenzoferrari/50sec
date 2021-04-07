import axios, { AxiosResponse } from "axios";
import { toast } from "react-toastify";

const api = axios.create({
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export default api;

export function handleError(error: any) {
  if (error.response) {
    const { error: message } = error.response.data;

    toast.error(message);

    return;
  }

  console.log(error);
}

type HTTPMethod = "get" | "post" | "put" | "delete";

export async function call(method: HTTPMethod, endpoint: string, payload: any) {
  let data: AxiosResponse<any>;

  try {
    data = await api[method](endpoint, payload);
  } catch (error) {
    handleError(error);

    return "error";
  }

  return data;
}
