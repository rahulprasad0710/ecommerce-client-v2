import { useContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import ADMIN_PERMISSSION from "../../constant/AdminPermission.js";
import { AuthContext } from "../../context/AuthContext";
import { PrivateAxios } from "../../api/AxiosInstance";
import API_ROUTE from "../../api/API_Route";

const ProductList = () => {
    const navigate = useNavigate();
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

    const handleEdit = (id) => {};

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
                                    <td>category</td>
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
                                            onClick={() => handleEdit(item._id)}
                                            className='btn btn-sm btn-outline-primary mx-2'>
                                            Edit
                                        </button>
                                        <button className='btn btn-sm btn-outline-danger mx-2'>
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default ProductList;
