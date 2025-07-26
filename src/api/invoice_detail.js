import api from "./axios";

export const getAllInvoiceDetail = () => api.get('api/detalle/');
export const getInvoiceDetailById = (id) => api.get('api/detalle/${id}');