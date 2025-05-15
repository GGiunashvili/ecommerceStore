import {
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from "react";

interface AuthContextType {
  currentUser: any;
  login: (username: string, password: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<any>(null);
  const [tokenUpdated, setTokenUpdated] = useState(false); // ახალი სტეიტი

  useEffect(() => {
    fetchCurrentUser();
  }, [tokenUpdated]); // როცა token შეიცვლება, თავიდან გამოიძახე

  const fetchCurrentUser = async () => {
    const accessToken = localStorage.getItem("accessToken");
    if (accessToken) {
      try {
        const response = await fetch("https://dati.pythonanywhere.com/me/", {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch user data");
        }

        const data = await response.json();
        setCurrentUser(data);
      } catch (error) {
        console.error("Error fetching user data:", (error as Error).message);
      }
    }
  };

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

      setTokenUpdated((prev) => !prev); // ტოკენის განახლება გამოიწვევს useEffect-ს

      // არ გვინდა აქვე setCurrentUser(data), იმიტომ რომ მონაცემი `/me/`-დან მოდის
    } catch (error) {
      console.error("Login failed:", (error as Error).message);
      throw error;
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
