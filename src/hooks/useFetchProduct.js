import { useEffect, useState } from "react";
import {getAllProduct} from '../api/product';

export const useFetchClient = () => {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllProduct()
        .then((res) => setProduct(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, []);

    return {product, loading};
}