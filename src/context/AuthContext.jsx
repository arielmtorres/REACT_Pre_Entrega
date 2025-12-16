import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const saved = sessionStorage.getItem("session");
    if (saved) setUser(JSON.parse(saved));
  }, []);

  const login = (username, password) => {
    if (username === "admin" && password === "1234") {
      const u = { username: "admin" };
      sessionStorage.setItem("session", JSON.stringify(u));
      setUser(u);
      return true;
    }
    return false;
  };

  const logout = () => {
    sessionStorage.removeItem("session");
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
