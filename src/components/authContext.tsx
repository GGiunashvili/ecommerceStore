import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  currentUser: any;
  login: (username: string, password: string) => Promise<void>;
  // logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState();
  // useEffect(() => {
  //   const accessToken = localStorage.getItem("accessToken");
  //   const refreshToken = localStorage.getItem("refreshToken");
  //   if (accessToken && refreshToken) {
  //     setCurrentUser({ accessToken, refreshToken });
  //   }
  // }
  const login = async (username: string, password: string) => {
    try {
      const response = await fetch("https://dati.pythonanywhere.com/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();
      localStorage.setItem("accessToken", data.acsses);
      localStorage.setItem("refreshToken", data.refresh);

      setCurrentUser(data);
    } catch (error) {
      console.error("Login failed:", (error as Error).message);
    }
  };

  // const logout = () => {
  //   setAccessToken("");
  //   setRefreshToken("");
  //   setFirstName("");
  //   setLastName("");
  // };

  return (
    <AuthContext.Provider value={{ currentUser, login }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
