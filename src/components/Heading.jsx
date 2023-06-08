import { useNavigate } from "react-router-dom";

const Heading = (props) => {
    const { title, btnText, handleClick } = props;
    const navigate = useNavigate();
    return (
        <>
            <div className='row'>
                <div className='col-12 col-md-9'>
                    <h5>{title}</h5>
                </div>
                <div className='col-12 col-md-3'>
                    <div className='float-end'>
                        <button
                            className='btn btn-outline-warning btn-sm'
                            onClick={() => handleClick()}>
                            {btnText}
                        </button>
                    </div>
                </div>
            </div>
            <hr />
        </>
    );
};

export default Heading;
