import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import ADMIN_PERMISSSION from "../../constant/AdminPermission.js";
import { AuthContext } from "../../context/AuthContext";

const ProductList = () => {
    const { userInfo } = useContext(AuthContext);
    let isAdminHasPermission = userInfo.Permissions.includes(
        ADMIN_PERMISSSION.PRODUCT_CREATE
    );

    const navigate = useNavigate();
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
        </div>
    );
};

export default ProductList;
