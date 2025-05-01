import { useState } from "react";
import { useAuth } from "../components/authContext"; // useAuth import
import { useNavigate } from "react-router-dom"; // Import useNavigate

const LogInForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const { currentUser, login } = useAuth(); // get context values
  const navigate = useNavigate(); // Initialize navigate function
  const handleLogin = async () => {
    try {
      await login(username, password); // თუ არ იქნა exception
      navigate("/profile"); // მაშინ გადადი
    } catch (error) {
      alert("მომხმარებელი ან პაროლი არასწორია");
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
