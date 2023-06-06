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
                <div className='dropdown'>
                    <a
                        href='#'
                        className='d-flex align-items-center link-dark text-decoration-none dropdown-toggle'
                        id='dropdownUser2'
                        data-bs-toggle='dropdown'
                        aria-expanded='false'>
                        <strong>mdo</strong>
                    </a>
                    <ul
                        className='dropdown-menu text-small shadow'
                        aria-labelledby='dropdownUser2'>
                        <li>
                            <a className='dropdown-item' href='#'>
                                New project...
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                Settings
                            </a>
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                Profile
                            </a>
                        </li>
                        <li>
                            <hr className='dropdown-divider' />
                        </li>
                        <li>
                            <a className='dropdown-item' href='#'>
                                Sign out
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default AdminSidebar;
