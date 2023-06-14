const AreYouSure = (props) => {
    const { children, modalTitle, openModal, setOpenModal, showFooter } = props;
    return (
        <div className={openModal ? "modal d-block" : "modal"}>
            <div className='modal-dialog'>
                <div className='modal-content'>
                    <div className='modal-header'>
                        <h5 className='modal-title'>{modalTitle}</h5>
                        <button
                            type='button'
                            onClick={() => setOpenModal(false)}
                            className='btn-close'
                            data-bs-dismiss='modal'
                            aria-label='Close'></button>
                    </div>
                    <div className='modal-body'>{children}</div>
                    {showFooter && (
                        <div className='modal-footer'>
                            <button
                                type='button'
                                onClick={() => setOpenModal(false)}
                                className='btn btn-secondary'
                                data-bs-dismiss='modal'>
                                Close
                            </button>
                            <button type='button' className='btn btn-primary'>
                                Submit
                            </button>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default AreYouSure;
