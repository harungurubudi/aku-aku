import axios, { AxiosPromise, AxiosError, AxiosResponse } from "axios";

// const getAuthHeader = () => {
//   return null;
// };

const axiosInstance = axios.create({
  method: "get",
  baseURL: process.env.API_URI,
  headers: {}
});
const Api = axiosInstance;

interface DoRequestParams<T> {
  apiMethod: () => AxiosPromise<T>;
  onStart?: () => void;
  onError?: (e: AxiosError) => void;
  onSuccess?: (data: AxiosResponse<T>) => void;
  onEnd?: () => void;
}
async function DoRequest<T>({
  apiMethod,
  onStart,
  onError,
  onSuccess,
  onEnd
}: DoRequestParams<T>) {
  if (onStart) {
    onStart();
  }
  try {
    const data = await apiMethod();
    if (onSuccess && data) {
      console.log(data);
      onSuccess(data);
    }
  } catch (e) {
    console.log(e);
    if (onError) {
      onError(e);
    }
  } finally {
    if (onEnd) {
      onEnd();
    }
  }
}

export { Api, DoRequest };
