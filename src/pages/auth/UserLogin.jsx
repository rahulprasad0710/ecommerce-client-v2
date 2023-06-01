import { useState } from "react";
import axios from "axios";
import API_ROUTE from "../../api/API_Route";
import { Link } from "react-router-dom";

const UserLogin = () => {
    const [userData, setUserData] = useState({
        mobileNumber: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData);

        try {
            const response = await axios.post(API_ROUTE.USER_LOGIN, userData);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };
    return (
        <div className='container '>
            <div className='login-container'>
                <div className='card p-3 shadow'>
                    <h3 className='text-success text-center py-2 my-2'>
                        Login
                    </h3>
                    <div className='card-body'>
                        <form action=''>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='mb-2'>
                                        <label
                                            htmlFor=''
                                            className='form-label'>
                                            Mobile Number
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                const tempData = {
                                                    ...userData,
                                                    mobileNumber:
                                                        e.target.value,
                                                };
                                                setUserData(tempData);
                                            }}
                                            value={userData.mobileNumber}
                                            type='number'
                                            className='form-control'
                                            placeholder='Please Enter your mobile Number'
                                        />
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='mb-2'>
                                        <label
                                            htmlFor=''
                                            className='form-label'>
                                            Password
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                const tempData = {
                                                    ...userData,
                                                    password: e.target.value,
                                                };
                                                setUserData(tempData);
                                            }}
                                            value={userData.password}
                                            type='password'
                                            className='form-control'
                                            placeholder='Please Enter your mobile Number'
                                        />
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='float-end mb-3'>
                                        <button
                                            onClick={handleSubmit}
                                            className='btn btn-success  '>
                                            Submit
                                        </button>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='float-end'>
                                        <p>
                                            Don&apos;t have an account ?{" "}
                                            <Link
                                                to='/auth/signup'
                                                className='text-primary'>
                                                Signup Here
                                            </Link>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserLogin;
