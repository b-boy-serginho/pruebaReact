import { useEffect, useState } from "react";
import {getAllInvoice} from '../api/invoice';

export const useFetchInvoice = () => {
    const [invoice, setInvoice] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllInvoice()
        .then((res) => setInvoice(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, []);

    return {invoice, loading};
}