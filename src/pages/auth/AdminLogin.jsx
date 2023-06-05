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
        email: "",
        password: "",
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(userData);
        if (userData.email === "") {
            toast.warning("Emali Address cannot be empty.");
            return;
        }

        if (userData.password === "") {
            toast.warning("Password cannot be empty.");
            return;
        }

        const tempData = {
            password: userData.password,
            email: userData.email,
        };
        try {
            const { data } = await axios.post(API_ROUTE.ADMIN_LOGIN, tempData);
            console.log(data, "Admin data");
            if (data.success) {
                console.log("login success", data);
                const { rest, accessToken } = data.data;
                const tempData = {
                    token: accessToken,
                    name: rest.email,
                    isAdmin: rest.isAdmin,
                    Permissions: rest.permission,
                };
                console.log("tempData", tempData);
                const isLogin = loginFn(tempData, rememberMe);
                if (isLogin) {
                    navigate("/", {
                        replace: true,
                    });
                }
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
                    <h3 className='bg-success text-light text-center py-2 my-2'>
                        Admin Login
                    </h3>
                    <div className='card-body'>
                        <form action=''>
                            <div className='row'>
                                <div className='col-12'>
                                    <div className='mb-2'>
                                        <label
                                            htmlFor=''
                                            className='form-label'>
                                            Email Address
                                        </label>
                                        <input
                                            onChange={(e) => {
                                                const tempData = {
                                                    ...userData,
                                                    email: e.target.value,
                                                };
                                                setUserData(tempData);
                                            }}
                                            value={userData.email}
                                            type='email'
                                            className='form-control'
                                            placeholder='Please Enter your email address.'
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
