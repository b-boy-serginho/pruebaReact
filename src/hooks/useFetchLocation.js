import { useEffect, useState } from "react";
import {getAllLocation} from '../api/location';

export const useFetchLocation = () => {
    const [location, setLocation] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllLocation()
        .then((res) => setLocation(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, []);

    return {location, loading};
}