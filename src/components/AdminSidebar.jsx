import { Link, useNavigate, NavLink } from "react-router-dom";
import { useContext } from "react";
import ADMIN_PERMISSSION from "../constant/AdminPermission";
import { AuthContext } from "../context/AuthContext";

const AdminSidebar = () => {
    const navigate = useNavigate();
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
        <div className='sidebar-container'>
            <div className='wrapper d-flex flex-column flex-shrink-0 bg-light'>
                <ul className='nav nav-pills flex-column mb-auto'>
                    <li className='nav-link-item sidebar-link'>
                        <NavLink
                            to='/admin/dashboard'
                            className='nav-link  link-dark'>
                            <i className='fa-solid fa-table-columns '></i>
                            <span className='nav-link-text'>Dashboard</span>
                        </NavLink>
                    </li>
                    <li className='nav-link-item sidebar-link'>
                        <NavLink
                            to='/admin/orders'
                            className='nav-link  link-dark'>
                            <i className='fa-solid fa-cart-arrow-down'></i>
                            <span className='nav-link-text'>Orders</span>
                        </NavLink>
                    </li>

                    <li className='nav-link-item sidebar-link'>
                        <NavLink
                            to='/admin/products'
                            className='nav-link  link-dark'>
                            <i className='fa-solid fa-box-open '></i>
                            <span className='nav-link-text'>Product</span>
                        </NavLink>
                    </li>
                    <li className='nav-link-item sidebar-link'>
                        <NavLink
                            to='/admin/products'
                            className='nav-link  link-dark'>
                            <i className='fa-solid fa-users'></i>

                            <span className='nav-link-text'>Customers</span>
                        </NavLink>
                    </li>
                    <li className='nav-link-item sidebar-link'>
                        <NavLink
                            to='/admin/products'
                            className='nav-link  link-dark'>
                            <i className='fa-regular fa-image'></i>

                            <span className='nav-link-text'>Files Upload</span>
                        </NavLink>
                    </li>

                    {userInfo.Permissions.includes(
                        ADMIN_PERMISSSION.ADMIN_ADD
                    ) && (
                        <li className='nav-link-item sidebar-link'>
                            <NavLink
                                to='/admin/add-admin'
                                className='nav-link  link-dark'>
                                <i className='fa-solid fa-user-gear'></i>
                                <span className='nav-link-text'>
                                    Create Admin
                                </span>
                            </NavLink>
                        </li>
                    )}
                </ul>
                <hr />
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
