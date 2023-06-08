import Heading from "../../components/Heading";
import { useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

// {
//   "firstName": "John",
//   "lastName": "Doe",
//   "email": "johndoe@example.com",
//   "status": "ACTIVE",
//   "isAdmin": true,
//   "password": "password1234",
//   "confirmPassword": "password1234",
//   "mobileNumber": 1234567890,
//   "permission": ["BOOK_VIEW",
//     "BOOK_CREATE"]
// }

const AddAdmin = () => {
    const { userInfo } = useContext(AuthContext);
    let isAdminHasPermission = userInfo.Permissions.includes("ADMIN_ADD");
    const navigate = useNavigate();

    return (
        <div>
            <Heading
                title='Add Staff'
                btnText='Back'
                handleClick={() => navigate(-1)}
            />
            <section>
                <form action=''>
                    <div className='row mb-3'>
                        <div className='col-12 col-md-4'>
                            <div className='mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter your email'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='mb-2'>
                                <label className='form-label'>First Name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter your First Name'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='mb-2'>
                                <label className='form-label'>Last Name</label>
                                <input
                                    type='text'
                                    className='form-control'
                                    placeholder='Enter your  Last Name'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <div className='mb-2'>
                                <label className='form-label'>
                                    Mobile Number
                                </label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Enter your mobile number'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='mb-2'>
                                <label className='form-label'>Password</label>
                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='Enter your password'
                                />
                            </div>
                        </div>
                        <div className='col-12 col-md-4'>
                            <div className='mb-2'>
                                <label className='form-label'>
                                    Confirm Password
                                </label>
                                <input
                                    type='password'
                                    className='form-control'
                                    placeholder='Enter your password again'
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='mb-2'>
                            <label className='form-label'>Add Permission</label>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddAdmin;
