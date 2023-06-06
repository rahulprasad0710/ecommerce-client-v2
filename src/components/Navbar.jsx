import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Navbar = () => {
    const { userInfo, logoutFn } = useContext(AuthContext);
    console.log("userInfo navbar", userInfo);
    const navigate = useNavigate();
    const handleLogout = () => {
        const isLogout = logoutFn();
        if (isLogout) {
            navigate("/", {
                replace: true,
            });
        }
    };

    return (
        <nav className='navbar bg-primary text-dark navbar-expand-md bg-body-tertiary shadow-sm'>
            <div className='container'>
                <Link to={"/"} className='navbar-brand' href='#'>
                    Home
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
                                <Link to={"/cart"} className='nav-link active'>
                                    <i className='fa-solid fa-user-shield'></i>
                                    <span className='mx-2'>My Account</span>
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
