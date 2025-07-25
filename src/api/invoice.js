import api from "./axios";

export const getAllInvoice = () => api.get('api/factura');
export const getInvoiceById = (id) => api.get('api/factura/${id}');