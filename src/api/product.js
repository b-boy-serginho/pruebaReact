import api from "./axios";

export const getAllProduct = () => api.get('api/producto');
export const getProductById = (id) => api.get('api/producto/${id}');