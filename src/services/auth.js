// services/auth.js
import api from "../api/axios";

export const login = async (username, password) => {
  try {
    const response = await api.post("api/login/", {
      username,
      password
    });

    // Guarda el token JWT en localStorage
    const { access, refresh } = response.data;
    localStorage.setItem("access", access);
    localStorage.setItem("refresh", refresh);

    return response.data;
  } catch (error) {
    console.error("Error en login:", error.response?.data || error.message);
    throw error;
  }
};
