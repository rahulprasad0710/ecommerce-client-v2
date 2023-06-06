import { useContext, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";
// Context
import { AuthContext } from "../../context/AuthContext";
import AdminSidebar from "../../components/AdminSidebar";

const Layout = () => {
    const { userInfo } = useContext(AuthContext);

    return (
        <>
            {userInfo?.isAdmin ? (
                <div className=' d-flex'>
                    <AdminSidebar />
                    <section className='py-3'>
                        <Outlet />
                    </section>
                </div>
            ) : (
                <Navigate to={"/page-not-found"} replace={true} />
            )}
        </>
    );
};

export default Layout;
