import { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

import Heading from "../../components/Heading";
import { PrivateAxios } from "../../api/AxiosInstance";

const AddCarousel = () => {
    const navigate = useNavigate();

    const [selectedStatus, setSelectedStatus] = useState("INACTIVE");
    const [selectedImg, setselectedImg] = useState();
    const [carouselData, setcarouselData] = useState({
        title: "",
        url: "",
        description: "",
    });

    const handleIamgeSelect = (e) => {
        console.log(e.target.files);
        const temp = Array.from(e.target.files);
        setselectedImg(temp[0]);
        console.log(temp, "temp");
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(selectedStatus, "selectedStatus");
        console.log(carouselData, "carouselData");

        if (carouselData.url.includes(" ")) {
            console.log("URL contains spaces");
        }

        const formData = new FormData();

        formData.append("title", carouselData.title);
        formData.append("description", carouselData.description);
        formData.append("url", carouselData.url);
        formData.append("status", selectedStatus);
        formData.append("file", selectedImg);

        try {
            const config = {
                headers: {
                    "content-type": "multipart/form-data",
                },
            };

            const { data } = await PrivateAxios.post(
                "/corousel",
                formData,
                config
            );
            console.log(data, "response");
            console.log(data?.sucess, "success");
            if (data?.success) {
                toast.success("Carousel added successfully");
                navigate(-1);
            }
        } catch (error) {
            console.log(error);
            toast.error(error?.response?.message ?? "Something went wrong.");
        }
    };

    return (
        <div>
            <Heading title='Add Carousel' btnText='Back' />
            <section className='mt-3'>
                {selectedImg && (
                    <div className='row'>
                        <div className='col-12'>
                            <div className='w-100'>
                                <img
                                    src={URL.createObjectURL(selectedImg)}
                                    alt='Product Image '
                                    style={{
                                        height: "250px",
                                    }}
                                    className='img-thumbnail img-fluid m-2 '
                                />
                            </div>
                        </div>
                    </div>
                )}

                <form>
                    <div className='mb-3'>
                        <label className='form-label'>Carousel Image</label>
                        <input
                            accept='image/*'
                            onChange={(e) => handleIamgeSelect(e)}
                            type='file'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Title</label>
                        <input
                            onChange={(e) =>
                                setcarouselData({
                                    ...carouselData,
                                    title: e.target.value,
                                })
                            }
                            value={carouselData.title}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>
                            URL: Path to Products/Product
                        </label>
                        <div className='input-group'>
                            <span className='input-group-text'>
                                https://ecommerce-api-jbj8.onrender.com/
                            </span>
                            <input
                                type='text'
                                className='form-control'
                                onChange={(e) =>
                                    setcarouselData({
                                        ...carouselData,
                                        url: e.target.value,
                                    })
                                }
                                value={carouselData.url}
                            />
                        </div>
                    </div>

                    <div className='mb-3'>
                        <label className='form-label'>Description</label>
                        <input
                            onChange={(e) =>
                                setcarouselData({
                                    ...carouselData,
                                    description: e.target.value,
                                })
                            }
                            value={carouselData.description}
                            type='text'
                            className='form-control'
                        />
                    </div>
                    <div className='mb-3'>
                        <label className='form-label'>Status</label>
                        <select
                            onChange={(e) => setSelectedStatus(e.target.value)}
                            defaultValue={selectedStatus}
                            placeholder='Select Carousel Status'
                            className='form-select'>
                            <option value='ACTIVE'>ACTIVE</option>
                            <option value='INACTIVE'>INACTIVE</option>
                        </select>
                    </div>

                    <button
                        onClick={handleSubmit}
                        type='submit'
                        className='btn btn-primary float-end'>
                        Submit
                    </button>
                </form>
            </section>
            <ToastContainer />
        </div>
    );
};

export default AddCarousel;
