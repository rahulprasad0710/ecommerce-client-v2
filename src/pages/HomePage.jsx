import AreYouSure from "../components/HOC/AreYouSure";
import ProductModal from "../components/HOC/ProductModal";
import StaffModal from "../components/HOC/StaffModal";
const HomePage = () => {
    return (
        <div className='container py-3'>
            <AreYouSure>
                <ProductModal />
            </AreYouSure>

            <AreYouSure>
                <StaffModal />
            </AreYouSure>
        </div>
    );
};

export default HomePage;
