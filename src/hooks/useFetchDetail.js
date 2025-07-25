import { useEffect, useState } from "react";
import {getAllInvoiceDetail} from '../api/invoice_detail';

export const useFetchDetail = () => {
    const [detail, setDetail] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllInvoiceDetail()
        .then((res) => setDetail(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, []);

    return {detail, loading};
}