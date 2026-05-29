// src/services/authService.js

export const mockGoogleLogin = () => {
  return {
    uid: "google-user-001",
    name: "Alex",
    email: "alex@gmail.com",
    provider: "google",
  };
};

export const mockEmailLogin = (
  email,
  password
) => {
  if (email && password) {
    return {
      uid: "email-user-001",
      name: "Eco User",
      email,
      provider: "email",
    };
  }

  return null;
};

export const logoutUser = () => {
  localStorage.removeItem("eco_user");
};