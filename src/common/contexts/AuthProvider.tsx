import { ReactNode, useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { useLocalStorage } from "usehooks-ts";

const AuthProvider = (props: { children?: ReactNode }) => {
  const [authState, setAuthState] = useState<boolean>(false);
  const [token, setToken] = useLocalStorage(
    "token",
    localStorage.getItem("token")
  );
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!token) {
      setAuthState(false);
      setLoading(false);
      return;
    }
    setAuthState(true);
    setLoading(false);
  }, []);
  return (
    <AuthContext.Provider
      value={{
        token: token,
        setToken,
        isAuthenticated: authState,
        setAuthState,
      }}
    >
      {loading ? <p>Loading..</p> : props.children}
    </AuthContext.Provider>
  );
};

export default AuthProvider;
