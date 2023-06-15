import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { PublicAxios } from "../../api/AxiosInstance";
import API_ROUTE from "../../api/API_Route";

// NEW_ARRIVAL
//url = https://ecommerce-api-jbj8.onrender.com/api/product?featuredIn=NEW_ARRIVAL

const FeaturedProducts = (props) => {
    const navigate = useNavigate();
    const { name, value } = props;
    const [productData, setProductData] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const response = await PublicAxios.get(
                    `${API_ROUTE.GET_PRODUCTS}?featuredIn=${value}`
                );
                console.log(response?.data?.data);
                setProductData(response?.data?.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchProducts();
    }, [value]);

    const handleNavigate = (slug) => {
        console.log(slug, "slug");
        navigate(`/p/${slug}`);
    };

    return (
        <div className='mb-4'>
            <h4 className='p-2 bg-light text-success shadow shadow-sm '>
                {name}
            </h4>
            <div className='row'>
                {productData.map((item) => (
                    <div key={item._id} className='col-6 col-md-3 mb-3'>
                        <div
                            onClick={() => handleNavigate(item.slug)}
                            className='product-wrapper card'>
                            <div className='product-item-top-container'>
                                {item?.thumbnil?.pathName ? (
                                    <img
                                        style={{ height: "280px" }}
                                        className='img-fluid'
                                        src={item?.thumbnil?.pathName}
                                        alt={item?.name}
                                    />
                                ) : (
                                    <img
                                        className='img-fluid'
                                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
                                        alt={item?.name}
                                    />
                                )}
                            </div>
                            <div className='product-item-bottom container'>
                                <h5>{item?.name}</h5>
                                <div className='d-flex justify-content-between'>
                                    <div>{item?.mrp}</div>
                                    <div>{item?.price}</div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;
