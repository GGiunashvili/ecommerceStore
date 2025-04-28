// mockApi.tsx
export const mockLogin = async (username: string, password: string) => {
  if (username === "user" && password === "password") {
    return {
      accessToken: "mockAccessToken_12345",
      refreshToken: "mockRefreshToken_12345",
      firstName: "Gio",
      lastName: "Giunashvili",
    };
  } else {
    throw new Error("Invalid credentials");
  }
};

export const mockRefresh = async (refreshToken: string) => {
  if (refreshToken === "mockRefreshToken_12345") {
    return {
      accessToken: "mockAccessToken_new_67890",
    };
  } else {
    throw new Error("Invalid RefreshToken");
  }
};
