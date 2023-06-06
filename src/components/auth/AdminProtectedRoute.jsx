import { useContext } from "react";
import PageNotFound from "../../pages/PageNotFound";
import { AuthContext } from "../../context/AuthContext";

const AdminProtectedRoute = (props) => {
    const { children, permissionRequired } = props;
    const { userInfo } = useContext(AuthContext);

    return (
        <>
            {userInfo?.isAdmin &&
            userInfo.Permissions.includes(permissionRequired) ? (
                children
            ) : (
                <PageNotFound />
            )}
        </>
    );
};

export default AdminProtectedRoute;
