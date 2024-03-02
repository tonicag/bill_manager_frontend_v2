import { createContext, useContext } from "react";

export interface IAuthContext {
  isAuthenticated: boolean;
  setAuthState: (value: boolean) => void;
  token: string | null;
  setToken: (t: string) => void;
}

export const AuthContext = createContext<IAuthContext | null>(null);

export const useAuthContext = () => {
  const cntx = useContext(AuthContext);
  if (cntx == null) {
    throw new Error("Null Auth Context!");
  }
  return cntx;
};
