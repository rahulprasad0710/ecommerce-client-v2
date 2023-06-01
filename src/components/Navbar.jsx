import { Link } from "react-router-dom";

const NavbarComponent = () => {
    return (
        <nav className='navbar bg-primary text-dark navbar-expand-lg bg-body-tertiary'>
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
                        <li className='nav-item'>
                            <Link
                                to={"/auth/login"}
                                className='nav-link active'>
                                Login
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavbarComponent;
