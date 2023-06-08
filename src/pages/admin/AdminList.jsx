import Heading from "../../components/Heading";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AdminList = () => {
    const { userInfo } = useContext(AuthContext);
    let isAdminHasPermission = userInfo.Permissions.includes("ADMIN_ADD");
    const navigate = useNavigate();
    const handleClick = () => {
        if (isAdminHasPermission) {
            navigate("/admin/add-staff");
        } else {
            navigate(-1);
        }
    };

    return (
        <div>
            <Heading
                title='Admin List'
                btnText={isAdminHasPermission ? "Add Admin" : "Back"}
                handleClick={handleClick}
            />
        </div>
    );
};

export default AdminList;
