import { useState } from "react";
import axios from "axios";
import API_ROUTE from "../../api/API_Route";
import { Link, useNavigate } from "react-router-dom";

const UserRegister = () => {
    const navigate = useNavigate();
    const [newUser, setnewUser] = useState({
        username: "",
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobileNumber: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log("user", newUser);
        const tempData = newUser;
        try {
            const response = await axios.post(
                API_ROUTE.USER_REGISTER,
                tempData
            );

            if (response.data.success) {
                navigate("/auth/login");
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className='container my-3'>
            <div className='card p-3 shadow'>
                <h3 className='bg-primary text-light text-center py-2 my-2'>
                    Sign up
                </h3>
                <div className='card-body'>
                    <form action=''>
                        <div className='row'>
                            <div className='col-12 col-md-6'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Username
                                    </label>
                                    <input
                                        type='text'
                                        onChange={(e) =>
                                            setnewUser({
                                                ...newUser,
                                                username: e.target.value,
                                            })
                                        }
                                        value={newUser.username}
                                        className='form-control'
                                        placeholder='Enter your username'
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Full Name
                                    </label>
                                    <input
                                        type='text'
                                        onChange={(e) =>
                                            setnewUser({
                                                ...newUser,
                                                name: e.target.value,
                                            })
                                        }
                                        value={newUser.name}
                                        className='form-control'
                                        placeholder='Enter your full name.'
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='mb-3'>
                                    <label className='form-label'>Email</label>
                                    <input
                                        onChange={(e) =>
                                            setnewUser({
                                                ...newUser,
                                                email: e.target.value,
                                            })
                                        }
                                        value={newUser.email}
                                        type='email'
                                        className='form-control'
                                        placeholder='Enter your email'
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Mobile Number
                                    </label>
                                    <input
                                        type='number'
                                        onChange={(e) =>
                                            setnewUser({
                                                ...newUser,
                                                mobileNumber: e.target.value,
                                            })
                                        }
                                        value={newUser.mobileNumber}
                                        className='form-control'
                                        placeholder='Enter your Mobile Number.'
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Password
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            setnewUser({
                                                ...newUser,
                                                password: e.target.value,
                                            })
                                        }
                                        value={newUser.password}
                                        type='password'
                                        className='form-control'
                                        placeholder='Enter your password'
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-6'>
                                <div className='mb-3'>
                                    <label className='form-label'>
                                        Confirm Password
                                    </label>
                                    <input
                                        onChange={(e) =>
                                            setnewUser({
                                                ...newUser,
                                                confirmPassword: e.target.value,
                                            })
                                        }
                                        value={newUser.confirmPassword}
                                        type='password'
                                        className='form-control'
                                        placeholder='Enter your password again.'
                                    />
                                </div>
                            </div>
                            <div className='col-12 col-md-8'>
                                <div>
                                    <p className='text-info'>
                                        ALready have an account?
                                        <span>
                                            <Link
                                                className='nav-item mx-3'
                                                to='/auth/login'>
                                                Login
                                            </Link>
                                        </span>
                                        `
                                    </p>
                                </div>
                            </div>
                            <div className='col-12 col-md-4'>
                                <div className='float-end'>
                                    <button
                                        type='submit'
                                        onClick={handleSubmit}
                                        className='btn btn-success'>
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default UserRegister;
