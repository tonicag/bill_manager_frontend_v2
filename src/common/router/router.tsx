import HomePage from "@/pages/home/HomePage";
import { createBrowserRouter } from "react-router-dom";
import AuthenticatedGuard from "../guards/authenticated.guard";
import LogIn from "@/pages/login/LogIn";
import Dashboard from "@/pages/dashboard/Dashboard";
import Settings from "@/pages/dashboard/settings/Settings";
import Products from "@/pages/products/Products";
import LogOut from "@/pages/logout/LogOut";

export const router = createBrowserRouter([
  { path: "", element: <HomePage /> },
  { path: "/login", element: <LogIn /> },
  {
    path: "dashboard",
    element: <AuthenticatedGuard />,
    children: [
      {
        path: "",
        element: <Dashboard />,

        errorElement: <div>NotFound</div>,
        children: [
          { path: "bills", element: <div>Bills</div> },
          { path: "products", element: <Products /> },
          { path: "settings", element: <Settings /> },
        ],
      },
    ],
  },
  { path: "/logout", element: <LogOut /> },
]);
