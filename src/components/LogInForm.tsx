import { useState } from "react";
import { useAuth } from "../components/authContext"; // useAuth import

const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser, login } = useAuth(); // get context values

  const handleLogin = async () => {
    try {
      await login(username, password); // use login from context
    } catch (error) {
      console.error("Login failed:", (error as Error).message);
    }
  };
  console.log(currentUser);

  return (
    <div>
      <h1>Login to the App</h1>
      <div>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  );
};

export default LogInForm;
