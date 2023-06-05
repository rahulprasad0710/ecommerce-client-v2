import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <div className='bg-primary text-light py-3'>
            <div className='container'>
                <div className='row'>
                    <div className='col-12 col-md-4'>
                        <h4 className='text-light'>Contact Us</h4>
                        <p className='text-light '>
                            @ 2021, All Rights Reserved by E-Commerce Website
                        </p>
                        <Link to='/auth/admin-login' className='text-light'>
                            Admin
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Footer;
