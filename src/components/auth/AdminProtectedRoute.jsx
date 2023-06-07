import { useContext } from "react";
import { Navigate } from "react-router-dom";
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
                <Navigate
                    to={
                        userInfo?.isAdmin
                            ? "/admin/page-not-found"
                            : "/page-not-found"
                    }
                />
            )}
        </>
    );
};

export default AdminProtectedRoute;
