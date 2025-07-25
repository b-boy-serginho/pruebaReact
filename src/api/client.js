import api from "./axios";

export const getAllClient = () => api.get('api/cliente');
export const getClientById = (id) => api.get('api/cliente/${id}');