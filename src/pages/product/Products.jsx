import { useCallback, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import API_ROUTE from "../../api/API_Route";
import { PublicAxios } from "../../api/AxiosInstance";

const Products = () => {
    const location = useLocation();
    const { search } = location;
    const searchParams = new URLSearchParams(search);

    const featuredIn = searchParams.get("featuredIn");
    const searchTerm = searchParams.get("searchTerm");

    const [products, setProducts] = useState([]);

    const fetchProducts = useCallback(async (newUrl) => {
        try {
            const response = await PublicAxios.get(newUrl);
            setProducts(response?.data);
            window.scrollTo(0, 0);
        } catch (error) {
            console.log(error);
        }
    }, []);

    useEffect(() => {
        const updateUrl = async () => {
            const queryParams = new URLSearchParams();
            if (featuredIn && searchTerm) {
                queryParams.set("featuredIn", featuredIn);
                queryParams.set("searchTerm", searchTerm);
            }
            if (featuredIn) {
                queryParams.set("featuredIn", featuredIn);
            }
            if (searchTerm) {
                queryParams.set("searchTerm", searchTerm);
            }
            const newUrl = `${
                API_ROUTE.GET_PRODUCTS
            }?${queryParams.toString()}`;
            history.pushState(null, null, `?${queryParams.toString()}`);
            fetchProducts(newUrl);
        };

        updateUrl();
    }, [fetchProducts, featuredIn, searchTerm]);

    return <div>Products</div>;
};

export default Products;
