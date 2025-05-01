import { createContext, useContext, useState, ReactNode } from "react";

interface AuthContextType {
  currentUser: any;
  login: (username: string, password: string) => Promise<void>;
  // logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState();

  const login = async (username: string, password: string) => {
    try {
      const response = await fetch("https://dati.pythonanywhere.com/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error("Invalid credentials");
      }

      const data = await response.json();
      localStorage.setItem("accessToken", data.acsses);
      localStorage.setItem("refreshToken", data.refresh);

      setCurrentUser(data);
    } catch (error) {
      console.error("Login failed:", (error as Error).message);
      throw error; // ⚠️ ეს აუცილებელია, რომ კომპონენტში ჩაჭრა იმუშაოს
    }
  };

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
