import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import ADMIN_PERMISSSION from "../../constant/AdminPermission.js";
import { AuthContext } from "../../context/AuthContext";
import { PrivateAxios } from "../../api/AxiosInstance";
import API_ROUTE from "../../api/API_Route";
import AreYouSure from "../../components/HOC/AreYouSure";
import ProductModal from "../../components/HOC/ProductModal";

const ProductList = () => {
    const navigate = useNavigate();
    const [openModal, setOpenModal] = useState(false);
    const [selectedData, setSelectedData] = useState();
    const [selectedStatus, setSelectedStatus] = useState();
    const [productData, setProductData] = useState([]);
    const { userInfo } = useContext(AuthContext);
    let isAdminHasPermission = userInfo.Permissions.includes(
        ADMIN_PERMISSSION.PRODUCT_CREATE
    );

    const fetchProducts = async () => {
        try {
            const response = await PrivateAxios.get(
                `${API_ROUTE.GET_PRODUCTS}?status=ALL`
            );
            console.log(response?.data?.data);
            setProductData(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchProducts();
    }, []);

    const handleSubmit = async () => {
        try {
            const payload = {
                status: selectedStatus,
            };
            const { data } = await PrivateAxios.put(
                `${API_ROUTE.GET_PRODUCTS}/${selectedData._id}`,
                payload
            );
            console.log(data, "Data");
            if (data?.sucess) {
                setOpenModal(false);
                fetchProducts();
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleOpenModal = (product) => {
        setSelectedData(product);
        setOpenModal(true);
    };

    return (
        <div>
            <Heading
                title='Product List'
                btnText={isAdminHasPermission ? "Add Product" : "Back"}
                handleClick={
                    isAdminHasPermission
                        ? () => navigate("/admin/products/add")
                        : () => navigate(-1)
                }
            />
            <section>
                <div className='card '>
                    <table className='table '>
                        <thead>
                            <tr className='table-info'>
                                <th scope='col'>S.N</th>
                                <th>Thumbnil</th>
                                <th>Name</th>
                                <th>category</th>
                                <th>Featured In</th>
                                <th scope='col'>MRP</th>
                                <th scope='col'>price</th>
                                <th scope='col'>Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {productData?.map((item, index) => (
                                <tr key={item._id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>
                                        {item?.thumbnil?.pathName ? (
                                            <img
                                                className='img-fluid'
                                                style={{ width: "50px" }}
                                                src={item?.thumbnil?.pathName}
                                                alt={item?.name}
                                            />
                                        ) : (
                                            <img
                                                className='img-fluid'
                                                style={{ width: "50px" }}
                                                src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/ac/No_image_available.svg/1024px-No_image_available.svg.png'
                                                alt={item?.name}
                                            />
                                        )}
                                    </td>
                                    <td>{item?.name}</td>
                                    <td>{item.category.title}</td>
                                    <td>{item?.featuredIn}</td>
                                    <td>{item.mrp}</td>
                                    <td>{item.price}</td>
                                    <td>
                                        {item.status === "ACTIVE" ? (
                                            <span className='badge text-bg-success'>
                                                {item.status}
                                            </span>
                                        ) : (
                                            <span className='badge text-bg-danger'>
                                                {item.status}
                                            </span>
                                        )}
                                    </td>
                                    <td>
                                        <button
                                            onClick={() =>
                                                handleOpenModal(item)
                                            }
                                            className='btn btn-sm btn-outline-primary mx-2'>
                                            Change Status
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
            <AreYouSure
                openModal={openModal}
                modalTitle='Do you want to change the product status?'
                setOpenModal={setOpenModal}>
                {selectedData && (
                    <ProductModal
                        selectedStatus={selectedStatus}
                        setSelectedStatus={setSelectedStatus}
                        handleBtnSubmit={handleSubmit}
                        setOpenModal={setOpenModal}
                        selectedData={selectedData}
                    />
                )}
            </AreYouSure>
        </div>
    );
};

export default ProductList;
