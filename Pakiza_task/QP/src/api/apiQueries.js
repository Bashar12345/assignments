// axiosConfig.js

import axios from "axios";
console.log(import.meta.env.VITE_BASE_URL)

// Create an instance of axios with default configuration
const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL, // Replace with your base URL
  timeout: 10000, // Example timeout
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded',
  },
});

// Optionally, you can set up interceptors for handling requests and responses
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Modify config, such as adding headers or logging
//     //     const token = localStorage.getItem("token");
//     //     if (token) {
//     //       config.headers.Authorization = `Bearer ${token}`;
//     //     }
//     //     return config;
//   },
//   (error) => {
//     // Handle request error
//     return Promise.reject(error);
//   }
// );

export default axiosInstance;
