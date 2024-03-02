import { RouterProvider } from "react-router-dom";
import "./App.css";
import AuthProvider from "./common/contexts/AuthProvider";
import { router } from "./common/router/router";
import AxiosInterceptors from "./services/API";
import { QueryClient, QueryClientProvider } from "react-query";
import "ag-grid-community/styles/ag-grid.css";
import "ag-grid-community/styles/ag-theme-quartz.css";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 3,
      staleTime: 0, // DEFAULT: 0 seconds
      cacheTime: 300000, // DEFAULT: 5 minutes (300000 ms)
      refetchOnMount: true,
      refetchOnWindowFocus: false,
      refetchOnReconnect: "always",
      suspense: false,
    },
  },
});

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <AxiosInterceptors>
          <RouterProvider router={router} />
        </AxiosInterceptors>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default App;
