import { useAuthContext } from "@/common/contexts/AuthContext";
import { useEffect } from "react";
import { Navigate } from "react-router-dom";

export default function LogOut() {
  const authState = useAuthContext();
  useEffect(() => {
    localStorage.clear();
    authState.setAuthState(false);
  }, []);
  return <Navigate to={"/"} />;
}
