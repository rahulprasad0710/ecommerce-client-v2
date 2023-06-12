import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Heading from "../../components/Heading";
import { PrivateAxios } from "../../api/AxiosInstance";
import API_ROUTE from "../../api/API_Route";

const AddCategory = () => {
    const navigate = useNavigate();
    const [title, setTitle] = useState("");
    const [selectedLevel, setSelectedLevel] = useState(3);
    const [parentArray, setParentArray] = useState([]);
    const [selectedParentId, setSelectedParentId] = useState(null);

    const levelOption = [
        {
            title: "1",
            value: 1,
        },
        {
            title: "2",
            value: 2,
        },
        {
            title: "3",
            value: 3,
        },
    ];

    const fetchParentData = async () => {
        try {
            const response = await PrivateAxios.get(
                `${API_ROUTE.GET_CATEGORY}?level=${Number(selectedLevel) - 1}`
            );
            console.log(response?.data?.data);
            setParentArray(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        if (selectedLevel !== "1") {
            fetchParentData();
        }
    }, [selectedLevel]);

    const handleChangeLevel = (e) => {
        setSelectedLevel(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const tempData = {
            title: title,
            level: Number(selectedLevel),
            parent: Number(selectedLevel) === 1 ? null : selectedParentId,
        };

        try {
            const response = await PrivateAxios.post(
                API_ROUTE.ADD_CATEGORY,
                tempData
            );
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div>
            <Heading
                title='Add Category'
                btnText='Back'
                handleClick={() => navigate(-1)}
            />
            <section>
                <form>
                    <div className='row'>
                        <div className='col-12 col-md-4'>
                            <div className='mb-3'>
                                <label className='form-label'>Level</label>
                                <select
                                    defaultValue={selectedLevel}
                                    onChange={(e) => handleChangeLevel(e)}
                                    id='disabledSelect'
                                    className='form-select'>
                                    {levelOption.map((item) => (
                                        <option
                                            key={item.value}
                                            value={item.value}>
                                            {" "}
                                            {item.title}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                        <div className='col-12 col-md-8'>
                            <div className='mb-3'>
                                <label className='form-label'>
                                    Category Name
                                </label>
                                <input
                                    type='text'
                                    onChange={(e) => setTitle(e.target.value)}
                                    value={title}
                                    className='form-control'
                                    id='exampleInputEmail1'
                                />
                            </div>
                        </div>
                        {selectedLevel !== "1" ? (
                            <div className='col-12'>
                                <div className='mb-3'>
                                    <label className='form-label'>Parent</label>
                                    <select
                                        onChange={(e) =>
                                            setSelectedParentId(e.target.value)
                                        }
                                        className='form-select'>
                                        {parentArray?.map((parentItem) => (
                                            <option
                                                value={parentItem._id}
                                                key={parentItem._id}>
                                                {selectedLevel === "3" && (
                                                    <span className='px-3'>
                                                        Level-1:
                                                        {
                                                            parentItem.parent
                                                                .title
                                                        }
                                                    </span>
                                                )}
                                                <span className='px-3'>
                                                    Level-2: {parentItem.title}
                                                </span>
                                            </option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                        ) : null}
                    </div>

                    <div className='col-12'>
                        <div className='float-end'>
                            <button
                                type='submit'
                                onClick={handleSubmit}
                                className='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default AddCategory;
