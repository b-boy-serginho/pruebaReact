import api from "./axios";

export const login = () => api.post('api/login');
export const logout = (id) => api.post('api/logout')