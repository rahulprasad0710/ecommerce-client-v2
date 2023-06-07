const AreYouSure = (props) => {
    const { children } = props;
    return (
        <div className='container card p-3'>
            <h3>Are you sure</h3>
            <hr />
            <div>{children}</div>
            <hr />
            <div className='d-flex justify-content-between'>
                <button className='btn btn-outline-secondary btn-sm'>
                    Cancel
                </button>
                <button className='btn btn-primary btn-sm'>Submit</button>
            </div>
        </div>
    );
};

export default AreYouSure;
