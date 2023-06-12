import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import ADMIN_PERMISSSION from "../../constant/AdminPermission";
import { PrivateAxios } from "../../api/AxiosInstance";
import API_ROUTE from "../../api/API_Route";

const CategoryList = () => {
    const { userInfo } = useContext(AuthContext);
    let isAdminHasPermission = userInfo.Permissions.includes(
        ADMIN_PERMISSSION.CATEGORY_CREATE
    );
    const navigate = useNavigate();
    const [selectedLevel, setSelectedLevel] = useState(3);
    const [catgData, setCatgData] = useState([]);

    const fetchParentData = async () => {
        try {
            const response = await PrivateAxios.get(
                `${API_ROUTE.GET_CATEGORY}?level=${Number(selectedLevel)}`
            );
            console.log(response?.data?.data);
            setCatgData(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchParentData();
    }, [selectedLevel]);

    return (
        <div>
            <Heading
                title='Category List'
                btnText={isAdminHasPermission ? "Add Catgeory" : "Back"}
                handleClick={
                    isAdminHasPermission
                        ? () => navigate("/admin/categories/add")
                        : () => navigate(-1)
                }
            />
            <section>
                <div className='float-end'>
                    <div className='btn-group'>
                        <button
                            type='button'
                            onClick={() => setSelectedLevel(() => 3)}
                            className={
                                selectedLevel === 3
                                    ? "btn btn-primary"
                                    : "btn btn-outline-primary "
                            }>
                            Level :3
                        </button>
                        <button
                            onClick={() => setSelectedLevel(2)}
                            type='button'
                            className={
                                selectedLevel === 2
                                    ? "btn btn-primary"
                                    : "btn btn-outline-primary "
                            }>
                            Level :2
                        </button>
                        <button
                            onClick={() => setSelectedLevel(1)}
                            type='button'
                            className={
                                selectedLevel === 1
                                    ? "btn btn-primary"
                                    : "btn btn-outline-primary "
                            }>
                            Level :1
                        </button>
                    </div>
                </div>
                <div>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th scope='col'>S.N</th>
                                <th scope='col'>Level</th>
                                <th scope='col'>Title</th>
                                <th scope='col'>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {catgData?.map((item, index) => (
                                <tr key={item._id}>
                                    <th scope='row'>{index + 1}</th>
                                    <td>{item.level}</td>
                                    <td>{item.title}</td>
                                    <td>
                                        {item.status === "ACTIVE" ? (
                                            <span className='badge text-bg-success'>
                                                {item.status}
                                            </span>
                                        ) : (
                                            <span className='badge text-bg-danger'>
                                                {item.status}
                                            </span>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </section>
        </div>
    );
};

export default CategoryList;
