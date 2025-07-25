import { useEffect, useState } from "react";
import {getallClient} from '../api/client';

export const useFetchClient = () => {
    const [client, setClient] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getallClient()
        .then((res) => setClient(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, []);

    return {client, loading};
}