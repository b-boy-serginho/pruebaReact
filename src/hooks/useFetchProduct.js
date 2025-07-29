import { useEffect, useState } from "react";
import {getAllProduct} from '../api/product';

export const useFetchProduct = () => {
    const [productList, setProduct] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getAllProduct()
        .then((res) => setProduct(res.data))
        .catch((err) => console.error(err))
        .finally(() => setLoading(false));
    }, []);

    return {productList, loading};
}