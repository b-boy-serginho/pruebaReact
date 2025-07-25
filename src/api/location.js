import api from "./axios";

export const getAllLocation = () => api.get('api/ubicacion');
export const getLocationById = (id) => api.get('api/ubicacion/${id}');