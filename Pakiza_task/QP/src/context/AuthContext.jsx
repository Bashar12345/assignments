// src/context/AuthContext.js
import { createContext, useContext, useEffect, useState } from "react";
import axiosInstance from "../api/apiQueries"; // Adjust path as per your project structure

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false); // Initialize as false initially

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      // Perform any token validation here if needed
      setIsAuthenticated(true);
    }
  }, []);

  const login = async (email, password) => {
    try {
      // Example: Using axiosInstance for login
      const response = await axiosInstance.post("/login", {
        email,
        password,
      });

      // Assuming your API returns a token upon successful login
      // const { token } = response.data;

      // Set token in local storage or session storage
      // localStorage.setItem('token', token);
      console.log(response);
      localStorage.setItem("accessToken", response.data.accessToken);
      localStorage.setItem("refreshToken", response.data.refreshToken);

      setIsAuthenticated(true);
      console.log("Login successful", response.data);
    } catch (error) {
      console.error("Login error:", error);
      setIsAuthenticated(false);
      throw new Error("Login failed");
    }
  };

  const logout = () => {
    // Clear token from local storage or session storage
    // localStorage.removeItem('token');
    setIsAuthenticated(false);
    console.log("Logged out");
  };

  const register = async (formData) => {
    try {
      // Example: Using axiosInstance for registration
      const response = await axiosInstance.post("/signup", formData);

      // Assuming your API returns a token upon successful registration
      // const { token } = response.data;

      // Set token in local storage or session storage
      // localStorage.setItem('token', token);

      setIsAuthenticated(true);
      console.log("Registration successful", response.data);
    } catch (error) {
      console.error("Registration error:", error);
      setIsAuthenticated(false);
      throw new Error("Registration failed");
    }
  };

  return (
    <AuthContext.Provider value={{ isAuthenticated, login, logout, register }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  return useContext(AuthContext);
};
