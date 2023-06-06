import { Link } from "react-router-dom";
import { useContext } from "react";
import ADMIN_PERMISSSION from "../constant/AdminPermission";
import { AuthContext } from "../context/AuthContext";

const AdminSidebar = () => {
    const { userInfo } = useContext(AuthContext);
    console.log("userInfo  sidebar", userInfo);

    return (
        <div className='sidebar-container'>
            <div className='wrapper d-flex flex-column flex-shrink-0 p-3 bg-light'>
                <ul className='nav nav-pills flex-column mb-auto'>
                    <li>
                        <a href='#' className='nav-link link-dark'>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link link-dark'>
                            Orders
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link link-dark'>
                            Products
                        </a>
                    </li>
                    <li>
                        <a href='#' className='nav-link link-dark'>
                            Customers
                        </a>
                    </li>

                    {userInfo.Permissions.includes(
                        ADMIN_PERMISSSION.ADMIN_ADD
                    ) && (
                        <li>
                            <Link
                                to='/admin/add-admin'
                                className='nav-link link-dark'>
                                Create Admin
                            </Link>
                        </li>
                    )}
                </ul>
                <hr />
                <div className='text-center'>
                    <button className='btn btn-outline-warning btn-sm'>
                        Logout
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;
