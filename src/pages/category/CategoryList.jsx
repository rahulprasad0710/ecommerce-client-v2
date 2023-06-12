import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import ADMIN_PERMISSSION from "../../constant/AdminPermission";

const CategoryList = () => {
    const { userInfo } = useContext(AuthContext);
    let isAdminHasPermission = userInfo.Permissions.includes(
        ADMIN_PERMISSSION.CATEGORY_CREATE
    );
    const navigate = useNavigate();
    return (
        <div>
            <Heading
                title='Category List'
                btnText={isAdminHasPermission ? "Add Catgeory" : "Back"}
                handleClick={
                    isAdminHasPermission
                        ? () => navigate("/admin/categories/add")
                        : () => navigate(-1)
                }
            />
        </div>
    );
};

export default CategoryList;
