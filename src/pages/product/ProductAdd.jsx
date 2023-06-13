import { useState, useEffect } from "react";
import { ToastContainer, toast } from "react-toastify";

import API_ROUTE from "../../api/API_Route";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import { PRODUCT_FEATURED } from "../../constant/ProductEnum";
import { PrivateAxios } from "../../api/AxiosInstance";

const ProductAdd = () => {
    const navigate = useNavigate();
    const [productValue, setProductValue] = useState({
        name: "",
        description: "",
        brand: "",
        price: "",
        mrp: "",
        quantity: "",
    });
    const [selectedFeatured, setSelectedFeatured] = useState("NEW_ARRIVAL");
    // category
    const [catg, setCatg] = useState([]);
    const [selectedCatg, setSelectedCatg] = useState("");
    // image
    const [imageList, setImageList] = useState([]);

    const fetchCatg = async () => {
        try {
            const { data } = await PrivateAxios.get(
                `${API_ROUTE.GET_CATEGORY}?level=3`
            );
            console.log(data, "catg");
            setCatg(data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCatg();
    }, []);

    const handleIamgeSelect = (e) => {
        console.log(e.target.files);
        const temp = Array.from(e.target.files);
        setImageList(temp);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(selectedFeatured, "selectedFeatured");
        console.log(productValue, "productValue");
        console.log(selectedCatg, "selectedCatg");
        console.log(imageList, "imageList");

        e.preventDefault();
        if (!imageList || imageList.length === 0) {
            toast.error("Please select a image");
            return;
        }
        if (imageList.length > 5) {
            toast.error("You can upload maximum 5 images");
            return;
        }
        const formData = new FormData();

        imageList.forEach((item) => {
            formData.append("file", item);
        });

        formData.append("name", productValue.name);
        formData.append("description", productValue.description);
        formData.append("price", productValue.price);
        formData.append("mrp", productValue.mrp);
        formData.append("category", selectedCatg);
        formData.append("brand", productValue.brand);
        formData.append("featuredIn", selectedFeatured);
        formData.append("quantity", productValue.quantity);

        try {
            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };

            const response = await PrivateAxios.post(
                "/product",
                formData,
                config
            );
            console.log(response, "response");
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div>
            <Heading
                title='Add Product'
                btnText='Back'
                handleClick={() => navigate(-1)}
            />
            <section className='card shadow shadow-sm p-3 mt-3'>
                <div>
                    <h5 className='form-label'>Upload Product Image</h5>
                    <p className='text-muted'>You can upload upto 5 image.</p>
                    <div className='row'>
                        {imageList.map((imageItem, index) => (
                            <div key={index} className='col-6 col-md-3'>
                                <img
                                    src={URL.createObjectURL(imageItem)}
                                    alt='Product Image '
                                    className='img-thumbnail img-fluid m-2'
                                />
                            </div>
                        ))}
                    </div>

                    <input
                        type='file'
                        multiple
                        accept='image/*'
                        onChange={(e) => handleIamgeSelect(e)}
                    />
                </div>
                <form
                    action='
                '>
                    <div className='row'>
                        {/* product Name */}
                        <div className='col-12'>
                            <div className='mb-2'>
                                <label className='form-label'>
                                    Product Name
                                </label>
                                <input
                                    onChange={(e) =>
                                        setProductValue({
                                            ...productValue,
                                            name: e.target.value,
                                        })
                                    }
                                    value={productValue.name}
                                    type='text'
                                    className='form-control'
                                />
                            </div>
                        </div>
                        {/* description */}
                        <div className='col-12'>
                            <div className='mb-2'>
                                <label className='form-label'>
                                    Description
                                </label>
                                <input
                                    onChange={(e) =>
                                        setProductValue({
                                            ...productValue,
                                            description: e.target.value,
                                        })
                                    }
                                    value={productValue.description}
                                    type='text'
                                    className='form-control'
                                />
                            </div>
                        </div>

                        <div className='col-12 col-md-6'>
                            <div className='mb-2'>
                                <label className='form-label'>Brand</label>
                                <input
                                    onChange={(e) =>
                                        setProductValue({
                                            ...productValue,
                                            brand: e.target.value,
                                        })
                                    }
                                    value={productValue.brand}
                                    type='text'
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-6'>
                            <div className='mb-2'>
                                <label className='form-label'>
                                    Featured In
                                </label>
                                <select
                                    value={selectedFeatured}
                                    onChange={(e) =>
                                        setSelectedFeatured(e.target.value)
                                    }
                                    className='form-select'>
                                    {PRODUCT_FEATURED?.map((item) => (
                                        <option
                                            value={item.value}
                                            key={item.value}>
                                            {item.name}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        {/* Category */}
                        <div className='col-12'>
                            <div className='mb-2'>
                                <label className='form-label'>Category:</label>
                                <select
                                    onChange={(e) =>
                                        setSelectedCatg(e.target.value)
                                    }
                                    className='form-select '>
                                    {catg?.map((item) => (
                                        <option value={item._id} key={item._id}>
                                            <div className='d-flex justify-content-around'>
                                                <div className='px-2 mx-2'>
                                                    Level-#1:-
                                                    {
                                                        item?.parent?.parent
                                                            ?.title
                                                    }
                                                </div>
                                                <div className='px-2 mx-2'>
                                                    Level-#2:-
                                                    {item?.parent?.title}
                                                </div>
                                                <div className='px-2 mx-2'>
                                                    Level-#3:-{item.title}
                                                </div>
                                            </div>
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        <div className='col-12 col-md-4'>
                            <div className='mb-2'>
                                <label className='form-label'>Price</label>
                                <input
                                    onChange={(e) =>
                                        setProductValue({
                                            ...productValue,
                                            price: e.target.value,
                                        })
                                    }
                                    value={productValue.price}
                                    type='number'
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='mb-2'>
                                <label className='form-label'>MRP</label>
                                <input
                                    onChange={(e) =>
                                        setProductValue({
                                            ...productValue,
                                            mrp: e.target.value,
                                        })
                                    }
                                    value={productValue.mrp}
                                    type='number'
                                    className='form-control'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='mb-2'>
                                <label className='form-label'>Quantity</label>
                                <input
                                    onChange={(e) =>
                                        setProductValue({
                                            ...productValue,
                                            quantity: e.target.value,
                                        })
                                    }
                                    value={productValue.quantity}
                                    type='number'
                                    className='form-control'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='col-12 mt-2'>
                        <div className='float-end'>
                            <button
                                onClick={handleSubmit}
                                className='btn btn-success'>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </section>
            <ToastContainer />
        </div>
    );
};

export default ProductAdd;
