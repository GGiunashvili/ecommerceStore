import { useState } from "react";
import { mockLogin, mockRefresh } from "../components/mockApi"; // mockApi იმპორტი
import ProfileEditor from "./ProfileEditor"; // ProfileEditor-ის იმპორტი
const Test = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accessToken, setAccessToken] = useState("");
  const [refreshToken, setRefreshToken] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  // შესვლის ფუნქცია
  const handleLogin = async () => {
    try {
      const data = await mockLogin(username, password);
      setAccessToken(data.accessToken);
      setRefreshToken(data.refreshToken);
      setFirstName(data.firstName);
      setLastName(data.lastName);
    } catch (error) {
      console.error("Login failed:", (error as Error).message);
    }
  };

  // AccessToken-ის განახლება
  const handleRefresh = async () => {
    try {
      const data = await mockRefresh(refreshToken); // mockRefresh-ის გამოძახება
      setAccessToken(data.accessToken);
    } catch (error) {
      console.error("Login failed:", (error as Error).message);
    }
  };

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

      {accessToken && (
        <div>
          <h2>
            Welcome, {firstName} {lastName}!
          </h2>
          <h3>AccessToken: {accessToken}</h3>
          <button onClick={handleRefresh}>Refresh AccessToken</button>
          <ProfileEditor
            firstName={firstName}
            lastName={lastName}
            onFirstNameChange={setFirstName}
            onLastNameChange={setLastName}
          />
        </div>
      )}
    </div>
  );
};

export default Test;
