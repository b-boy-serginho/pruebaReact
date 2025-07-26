import { useEffect, useState } from "react";
import {getAllClient} from '../api/client';

export const useFetchClient = () => {
    const [client, setClient] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllClient()
        .then((res) => setClient(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, []);

    return {client, loading};
}