import AllFeaturedProducts from "../components/product/AllFeaturedProducts";
import Carousel from "../components/product/Carousel";

const HomePage = () => {
    return (
        <div className='home-page  w-100 overflow-x-hidden'>
            <Carousel />
            <div className='container mt-3'>
                <AllFeaturedProducts />
            </div>
        </div>
    );
};

export default HomePage;
