import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import LOGO from "../assets/img/logo.png";

const Navbar = () => {
    const navigate = useNavigate();
    const { userInfo, logoutFn } = useContext(AuthContext);
    const [searchTerm, setSearchTerm] = useState("");

    const handleSearchTermChange = (event) => {
        console.log(event.target.value, "event.target.value");
        setSearchTerm(event.target.value);
    };

    const handleNavigateToProductsPage = () => {
        navigate(`/products?searchTerm=${searchTerm}`, {
            replace: true,
        });
    };

    const handleLogout = () => {
        const isLogout = logoutFn();
        if (isLogout) {
            navigate("/", {
                replace: true,
            });
        }
    };

    return (
        <nav className='navbar bg-primary text-dark navbar-expand-md bg-body-tertiary shadow-sm '>
            <div className='container-fluid'>
                <Link to={"/"} className='navbar-brand' href='#'>
                    <div className='sidebar-logo-container'>
                        <img
                            src={LOGO}
                            alt='logo'
                            className='sidebar-logo img-fluid'
                        />
                    </div>
                </Link>
                <button
                    className='navbar-toggler'
                    type='button'
                    data-bs-toggle='collapse'
                    data-bs-target='#navbarSupportedContent'
                    aria-controls='navbarSupportedContent'
                    aria-expanded='false'
                    aria-label='Toggle navigation'>
                    <span className='navbar-toggler-icon'></span>
                </button>
                <div
                    className='collapse navbar-collapse'
                    id='navbarSupportedContent'>
                    <ul className='navbar-nav ms-auto mb-2 mb-lg-0'>
                        <li className='nav-item'>
                            <div className='input-group '>
                                <input
                                    value={searchTerm}
                                    onChange={(event) =>
                                        handleSearchTermChange(event)
                                    }
                                    type='text'
                                    className='form-control'
                                    placeholder='search for products...'
                                />
                                <span
                                    onClick={handleNavigateToProductsPage}
                                    className='input-group-text cursor-pointer'
                                    id='basic-addon2'>
                                    <i className='fa-solid fa-magnifying-glass'></i>
                                </span>
                            </div>
                        </li>
                        {userInfo?.token && !userInfo?.isAdmin && (
                            <>
                                <li className='nav-item'>
                                    <Link
                                        to={"/profile/wishlist"}
                                        title='WishList'
                                        className='nav-link active'>
                                        <i className='fa-regular fa-heart'></i>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <Link
                                        to={"/cart"}
                                        title='Cart'
                                        className='nav-link active'>
                                        <i className='fa-solid fa-cart-shopping'></i>
                                    </Link>
                                </li>
                                <li className='nav-item'>
                                    <button
                                        onClick={handleLogout}
                                        className='nav-link cursor-pointer active'>
                                        Logout
                                    </button>
                                </li>
                            </>
                        )}
                        {userInfo?.token && userInfo?.isAdmin && (
                            <li className='nav-item'>
                                <Link
                                    to={"/admin/dashboard"}
                                    className='nav-link active'>
                                    <i className='fa-solid fa-user-shield'></i>
                                    <span className='mx-2'>Dashboard</span>
                                </Link>
                            </li>
                        )}
                        {userInfo?.token == null && (
                            <li className='nav-item'>
                                <Link
                                    to={"/auth/login"}
                                    className='nav-link active '>
                                    Login
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
