import { Navigate, Outlet } from "react-router-dom";
import { useAuthContext } from "../contexts/AuthContext";

const AuthenticatedGuard = () => {
  const authContext = useAuthContext();
  if (authContext.isAuthenticated) return <Outlet />;
  return <Navigate to={"/login"} />;
};

export default AuthenticatedGuard;
