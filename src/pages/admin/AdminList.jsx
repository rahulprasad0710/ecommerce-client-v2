import Heading from "../../components/Heading";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import API_ROUTE from "../../api/API_Route";

const AdminList = () => {
    const [staffList, setStaffList] = useState([]);
    const { userInfo } = useContext(AuthContext);
    let isAdminHasPermission = userInfo.Permissions.includes("ADMIN_ADD");
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await axios.get(API_ROUTE.STAFF_LIST, {
                headers: {
                    Authorization: `Bearer ${userInfo?.token}`,
                },
            });
            console.log(response, "staff list");
            setStaffList(response?.data?.staffs);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div>
            <Heading
                title='Admin List'
                btnText={isAdminHasPermission ? "Add Admin" : "Back"}
                handleClick={
                    isAdminHasPermission
                        ? () => navigate("/admin/add-staff")
                        : () => navigate(-1)
                }
            />
            <section>
                <div className='table-responsive'>
                    <table className='table align-middle'>
                        <thead>
                            <tr>
                                <th scope='col'>S.N</th>
                                <th scope='col'>Full Name</th>
                                <th scope='col'>Email </th>
                                <th scope='col'>Mobile Number</th>
                                <th scope='col'>status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {staffList.length > 0 ? (
                                staffList.map((staff, index) => (
                                    <tr key={staff.id}>
                                        <th scope='row'>{index + 1}</th>
                                        <td>
                                            <span className='text-capitalize'>
                                                {staff.fullName}
                                            </span>
                                        </td>
                                        <td>{staff.email}</td>
                                        <td>{staff.mobileNumber}</td>
                                        <td>
                                            {staff.status === "ACTIVE" ? (
                                                <span className='badge rounded-pill bg-success'>
                                                    Success
                                                </span>
                                            ) : (
                                                <span className='badge rounded-pill bg-danger'>
                                                    Danger
                                                </span>
                                            )}
                                        </td>
                                        <td>
                                            <button className='btn btn-primary btn-sm'>
                                                View
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <p>Data Not found</p>
                            )}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default AdminList;
