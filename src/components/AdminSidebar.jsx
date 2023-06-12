import { useNavigate, NavLink } from "react-router-dom";
import { useContext, useState } from "react";
import ADMIN_PERMISSSION from "../constant/AdminPermission";
import { AuthContext } from "../context/AuthContext";
import LOGO from "../assets/img/logo.png";

const AdminSidebar = () => {
    const navigate = useNavigate();
    const [hideSidebar, setHideSidebar] = useState(false);
    const { userInfo, logoutFn } = useContext(AuthContext);
    console.log("userInfo  sidebar", userInfo);

    const handleLogout = () => {
        const isLogout = logoutFn();
        if (isLogout) {
            navigate("/", {
                replace: true,
            });
        }
    };
    return (
        <div
            className={
                hideSidebar
                    ? "sidebar-container sidebar-container-close"
                    : "sidebar-container sidebar-container-open"
            }>
            <div className='wrapper d-flex flex-column flex-shrink-0 bg-light'>
                <div className='sidebar-header-container'>
                    <div
                        title='Click to hide/show sidebar'
                        onClick={() => setHideSidebar((prev) => !prev)}
                        className='sidebar-hamberger-container '>
                        <i className='fa-solid fa-bars'></i>
                    </div>
                    {hideSidebar ? null : (
                        <span className='nav-link-text font-bolder'>
                            Admin Panel
                        </span>
                    )}
                </div>
                <hr className='my-1' />
                <ul className='nav nav-pills flex-column mb-auto'>
                    <li className='nav-link-item sidebar-link'>
                        <NavLink
                            to='/admin/dashboard'
                            title='Dashboard'
                            className='nav-link  link-dark'>
                            <i className='fa-solid fa-table-columns '></i>
                            {hideSidebar ? null : (
                                <span className='nav-link-text'>Dashboard</span>
                            )}
                        </NavLink>
                    </li>
                    <li className='nav-link-item sidebar-link'>
                        <NavLink
                            to='/admin/orders'
                            title='Orders'
                            className='nav-link  link-dark'>
                            <i className='fa-solid fa-cart-arrow-down'></i>
                            {hideSidebar ? null : (
                                <span className='nav-link-text'>Orders</span>
                            )}
                        </NavLink>
                    </li>

                    <li className='nav-link-item sidebar-link'>
                        <NavLink
                            to='/admin/products/list'
                            title='Products'
                            className='nav-link  link-dark'>
                            <i className='fa-solid fa-box-open '></i>
                            {hideSidebar ? null : (
                                <span className='nav-link-text'>Product</span>
                            )}
                        </NavLink>
                    </li>
                    <li className='nav-link-item sidebar-link'>
                        <NavLink
                            to='/admin/customers/list'
                            title='Customers'
                            className='nav-link  link-dark'>
                            <i className='fa-solid fa-users'></i>
                            {hideSidebar ? null : (
                                <span className='nav-link-text'>Customers</span>
                            )}
                        </NavLink>
                    </li>
                    <li className='nav-link-item sidebar-link'>
                        <NavLink
                            to='/admin/files/list'
                            title='Files'
                            className='nav-link  link-dark'>
                            <i className='fa-regular fa-image'></i>
                            {hideSidebar ? null : (
                                <span className='nav-link-text'>
                                    Files Upload
                                </span>
                            )}
                        </NavLink>
                    </li>
                    {userInfo.Permissions.includes(
                        ADMIN_PERMISSSION.CATEGORY_VIEW
                    ) && (
                        <li className='nav-link-item sidebar-link'>
                            <NavLink
                                to='/admin/categories/list'
                                title='Category Setting'
                                className='nav-link  link-dark'>
                                <i className='fa-solid fa-user-gear'></i>
                                {hideSidebar ? null : (
                                    <span className='nav-link-text'>
                                        Categories
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    )}

                    {userInfo.Permissions.includes(
                        ADMIN_PERMISSSION.ADMIN_ADD
                    ) && (
                        <li className='nav-link-item sidebar-link'>
                            <NavLink
                                to='/admin/staff-list'
                                title='Admin Setting'
                                className='nav-link  link-dark'>
                                <i className='fa-solid fa-user-gear'></i>
                                {hideSidebar ? null : (
                                    <span className='nav-link-text'>
                                        Setting
                                    </span>
                                )}
                            </NavLink>
                        </li>
                    )}
                </ul>
                <hr className='my-1' />
                <div className='text-center'>
                    <button
                        onClick={handleLogout}
                        className='btn btn-outline-warning btn-sm'>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;
