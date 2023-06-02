import { useState } from "react";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import API_ROUTE from "../../api/API_Route";
import { Link, useNavigate } from "react-router-dom";
//context
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";

const UserLogin = () => {
    const { userInfo, loginFn } = useContext(AuthContext);
    console.log("login ma user", userInfo);
    const [showPassword, setShowPassword] = useState(false);
    const [rememberMe, setRememberMe] = useState(false);
    const navigate = useNavigate();
    const [userData, setUserData] = useState({
        mobileNumber: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData);
        if (userData.mobileNumber === "") {
            toast.warning("Mobile number cannot be empty.");
            return;
        }
        if (userData.mobileNumber.length !== 10) {
            toast.warning("Mobile number should be must be 10 digits.");
            return;
        }
        if (userData.password === "") {
            toast.warning("Password cannot be empty.");
            return;
        }

        const tempData = {
            password: userData.password,
            mobileNumber: Number(userData.mobileNumber),
        };
        try {
            const { data } = await axios.post(API_ROUTE.USER_LOGIN, tempData);
            console.log(data);
            if (data.success) {
                loginFn(data?.data, rememberMe);
                navigate("/", {
                    replace: true,
                });
            }
        } catch (error) {
            console.log("login error", error);

            const errorData = error?.response?.data;
            console.log("errorData", errorData);
            toast.error(errorData?.error);
        }
    };
    return (
        <div className='container d-flex justify-content-center'>
            <div className='login-container'>
                <div className='card card-sm p-3 shadow'>
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
                                            type={
                                                showPassword
                                                    ? "text"
                                                    : "password"
                                            }
                                            className='form-control'
                                            placeholder='Please Enter your mobile Number'
                                        />
                                        <div className='d-flex align-items-center justify-content-end'>
                                            <p className='text-primary mb-0 '>
                                                {" "}
                                                Show Password
                                            </p>
                                            <input
                                                type='checkbox'
                                                onClick={() =>
                                                    setShowPassword(
                                                        !showPassword
                                                    )
                                                }
                                                className='form-checkbox mx-2'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='mb-2'>
                                        <div className='d-flex align-items-center'>
                                            <p className='text-primary mb-0 '>
                                                Remember Me
                                            </p>
                                            <input
                                                type='checkbox'
                                                onClick={() =>
                                                    setRememberMe(!rememberMe)
                                                }
                                                className='form-checkbox mx-2'
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-12'>
                                    <div className='float-end my-3'>
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
            <ToastContainer newestOnTop={true} />
        </div>
    );
};

export default UserLogin;
