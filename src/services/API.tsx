import { AuthContext, useAuthContext } from "@/common/contexts/AuthContext";
import axios, { CancelTokenSource } from "axios";
import { ReactNode, useEffect, useMemo } from "react";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useLocalStorage } from "usehooks-ts";
export const API = axios.create({
  baseURL: `${import.meta.env.VITE_API_URL}`,
  timeout: 10000,
  headers: { "Content-Type": "application/json" },
});

API.interceptors.request.use(
  (request) => {
    const controller = new AbortController();
    if (request.url !== "/api/auth/login") {
      if (!request.headers.Authorization) {
        controller.abort();
      }
    }
    return {
      ...request,
      signal: controller.signal,
    };
  },
  (error) => {
    return Promise.reject(error);
  }
);

API.interceptors.response.use(
  (request) => {
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

interface AxiosInterceptorsProps {
  children: ReactNode;
}

const AxiosInterceptors = (props: AxiosInterceptorsProps) => {
  const authState = useAuthContext();

  useEffect(() => {
    const requestInterceptor = API.interceptors.request.use(
      (request) => {
        if (request.url !== "/api/auth/login") {
          if (authState.token !== null)
            request.headers.Authorization = `Bearer ${authState.token}`;
        }
        return request;
      },
      (error) => {
        return Promise.reject(error);
      }
    );
    const interceptor = API.interceptors.response.use(
      async (response) => response,
      async (error) => {
        return Promise.reject(error);
      }
    );

    return () => {
      API.interceptors.response.eject(interceptor);
      API.interceptors.response.eject(requestInterceptor);
    };
  }, [authState.token]);

  return props.children;
};
export default AxiosInterceptors;
