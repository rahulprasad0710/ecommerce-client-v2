import Heading from "../../components/Heading";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import Select from "react-select";
import ALL_PERMISSION from "../../constant/AllPermission";

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
    const [selectedPermissions, setSelectedPermissions] = useState([
        ALL_PERMISSION[0],
    ]);
    const [staffData, setStaffData] = useState({
        firstName: " ",
        lastName: "",
        email: "",
        mobileNumber: "",
        password: "",
        confirmPassword: "",
    });
    const navigate = useNavigate();

    const handleSubmit = () => {
        const newPermissionData = selectedPermissions.map((item) => {
            return item.value;
        });

        const tempData = {
            ...staffData,
            permission: newPermissionData,
            status: "ACTIVE",
            isAdmin: true,
        };

        (tempData.mobileNumber = Number(staffData.mobileNumber)),
            console.log({ tempData });
    };

    return (
        <div className='container'>
            <Heading
                title='Add Staff'
                btnText='Back'
                handleClick={() => navigate(-1)}
            />
            <section>
                <form action=''>
                    <div className='row mb-2'>
                        <div className='col-12 col-md-4'>
                            <div className='mb-2'>
                                <label className='form-label'>Email</label>
                                <input
                                    type='email'
                                    className='form-control'
                                    placeholder='Enter your email'
                                    onChange={(e) =>
                                        setStaffData({
                                            ...staffData,
                                            email: e.target.value,
                                        })
                                    }
                                    value={staffData.email}
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
                                    onChange={(e) =>
                                        setStaffData({
                                            ...staffData,
                                            firstName: e.target.value,
                                        })
                                    }
                                    value={staffData.firstName}
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
                                    onChange={(e) =>
                                        setStaffData({
                                            ...staffData,
                                            lastName: e.target.value,
                                        })
                                    }
                                    value={staffData.lastName}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='col-12 col-md-4'>
                            <div className='mb-2'>
                                <label className='form-label'>
                                    Mobile Number
                                </label>
                                <input
                                    type='number'
                                    className='form-control'
                                    placeholder='Enter your mobile number'
                                    onChange={(e) =>
                                        setStaffData({
                                            ...staffData,
                                            mobileNumber: e.target.value,
                                        })
                                    }
                                    value={staffData.mobileNumber}
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
                                    onChange={(e) =>
                                        setStaffData({
                                            ...staffData,
                                            password: e.target.value,
                                        })
                                    }
                                    value={staffData.password}
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
                                    onChange={(e) =>
                                        setStaffData({
                                            ...staffData,
                                            confirmPassword: e.target.value,
                                        })
                                    }
                                    value={staffData.confirmPassword}
                                />
                            </div>
                        </div>
                    </div>
                    <div className='row mb-2'>
                        <div className='mb-2'>
                            <label className='form-label'>Add Permission</label>
                            <Select
                                defaultValue={[ALL_PERMISSION[0]]}
                                isMulti
                                name='colors'
                                options={ALL_PERMISSION}
                                className='basic-multi-select'
                                classNamePrefix='select'
                                onChange={(e) => setSelectedPermissions(e)}
                                value={selectedPermissions}
                            />
                        </div>
                    </div>
                    <div className='row mb-3'>
                        <div className='col-12'>
                            <div className='float-end'>
                                <div
                                    onClick={handleSubmit}
                                    className='btn btn-success'>
                                    Submit
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddAdmin;
