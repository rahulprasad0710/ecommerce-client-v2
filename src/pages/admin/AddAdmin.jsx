import Heading from "../../components/Heading";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const AddAdmin = () => {
    const { userInfo } = useContext(AuthContext);
    let isAdminHasPermission = userInfo.Permissions.includes("ADMIN_ADD");
    const navigate = useNavigate();
    const handleClick = () => {
        if (isAdminHasPermission) {
            navigate("/admin/staff/add");
        } else {
            navigate(-1);
        }
    };

    return (
        <div>
            <Heading
                title='Staff List'
                btnText={isAdminHasPermission ? "Add Admin" : "Back"}
                handleClick={handleClick}
            />
        </div>
    );
};

export default AddAdmin;
