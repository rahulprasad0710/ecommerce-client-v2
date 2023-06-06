import { Outlet } from "react-router-dom";
// Context
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import AdminSidebar from "../../components/AdminSidebar";
import PageNotFound from "../PageNotFound";

const Layout = () => {
    const { userInfo } = useContext(AuthContext);
    return (
        <div>
            {userInfo?.isAdmin ? (
                <div className=' d-flex'>
                    <AdminSidebar />
                    <section>
                        <Outlet />
                    </section>
                </div>
            ) : (
                <PageNotFound />
            )}
        </div>
    );
};

export default Layout;
