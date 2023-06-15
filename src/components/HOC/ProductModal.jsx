const ProductModal = (props) => {
    const { selectedData, setOpenModal, handleBtnSubmit, setSelectedStatus } =
        props;
    const status = [
        {
            name: "ACTIVE",
            value: "ACTIVE",
        },
        {
            name: "INACTIVE",
            value: "INACTIVE",
        },
    ];

    return (
        <div>
            {selectedData && (
                <div className='row'>
                    <div className='col-4'>
                        <img
                            className='img-fluid'
                            style={{ width: "50px" }}
                            src={selectedData?.thumbnil?.pathName}
                            alt={selectedData?.name}
                        />
                    </div>
                    <div className='col-8'>
                        <div>
                            <h5>{selectedData.name}</h5>
                            <h6>Current Status:{selectedData.status}</h6>
                        </div>
                        <div>
                            <select
                                defaultValue={"ACTIVE"}
                                onChange={(e) =>
                                    setSelectedStatus(e.target.value)
                                }
                                className='form-select'
                                name=''
                                id=''>
                                {status.map((item) => (
                                    <option key={item.value} value={item.value}>
                                        {item.name}
                                    </option>
                                ))}
                            </select>
                        </div>
                        <div>
                            <button
                                type='button'
                                onClick={() => setOpenModal(false)}
                                className='btn btn-secondary'
                                data-bs-dismiss='modal'>
                                Close
                            </button>
                            <button
                                onClick={handleBtnSubmit}
                                type='button'
                                className='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ProductModal;
