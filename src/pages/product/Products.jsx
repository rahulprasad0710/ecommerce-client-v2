import { useCallback, useState, useEffect, useMemo } from "react";
import { useLocation } from "react-router-dom";
import API_ROUTE from "../../api/API_Route";
import { PublicAxios } from "../../api/AxiosInstance";

const Products = () => {
    const location = useLocation();
    const { search } = location;
    const searchParams = new URLSearchParams(search);

    const featuredIn = searchParams.get("featuredIn");
    const searchTerm = searchParams.get("searchTerm");

    const [selectedFeaturedIn, setSelectedFeaturedIn] = useState(
        featuredIn || ""
    );
    const [selectedSearchTerm, setSelectedSearchTerm] = useState(
        searchTerm || ""
    );

    const [url, setUrl] = useState(API_ROUTE.GET_PRODUCTS);
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
            if (selectedFeaturedIn && selectedSearchTerm) {
                queryParams.set("featuredIn", selectedFeaturedIn);
                queryParams.set("searchTerm", selectedSearchTerm);
            }
            if (selectedFeaturedIn) {
                queryParams.set("featuredIn", selectedFeaturedIn);
            }

            if (selectedSearchTerm) {
                queryParams.set("searchTerm", selectedSearchTerm);
            }

            const newUrl = `${
                API_ROUTE.GET_PRODUCTS
            }?${queryParams.toString()}`;
            setUrl(newUrl);
            console.log(newUrl, "newUrl");

            history.pushState(null, null, `?${queryParams.toString()}`);

            // Call fetchProducts after updating the URL
            fetchProducts(newUrl);
        };

        updateUrl();
    }, [fetchProducts, selectedFeaturedIn, selectedSearchTerm]);

    return <div>Products</div>;
};

export default Products;
