import { useState } from "react";
import { Link } from "react-router-dom";

const Carousel = () => {
    const imageList = [
        {
            title: "Summer Sale",
            pathName:
                "https://images.pexels.com/photos/2294342/pexels-photo-2294342.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            url: "/products?saerchTerm=Leivs&featuredIn=NEW_ARRIVAL",
        },
        {
            title: "New Arrival",
            pathName:
                "https://images.pexels.com/photos/102129/pexels-photo-102129.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            url: "/products?featuredIn=NEW_ARRIVAL",
        },
        {
            title: "Recommended",
            pathName:
                "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            url: "/products?featuredIn=RECOMMENDED",
        },
        {
            title: "Recommended",
            pathName:
                "https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            url: "/products?featuredIn=RECOMMENDED",
        },
        {
            title: "Happy Shopping",
            pathName:
                "https://images.pexels.com/photos/2356344/pexels-photo-2356344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
            url: "/products?featuredIn=NORMAL",
        },
    ];
    const [carouselShowIndex, setCarouselShowIndex] = useState(0);

    const nextBtn = () => {
        if (carouselShowIndex === imageList.length - 1) {
            setCarouselShowIndex(0);
        } else {
            setCarouselShowIndex(carouselShowIndex + 1);
        }
    };

    const previousBtn = () => {
        if (carouselShowIndex === 0) {
            setCarouselShowIndex(imageList.length - 1);
        } else {
            setCarouselShowIndex(carouselShowIndex - 1);
        }
    };

    return (
        <div
            id='carouselExampleAutoplaying'
            className='carousel slide '
            data-bs-ride='carousel'>
            <div className='carousel-inner'>
                {imageList.map((item, index) => (
                    <Link
                        to={item.url}
                        key={index}
                        className={
                            carouselShowIndex === index
                                ? "carousel-item active"
                                : "carousel-item"
                        }>
                        <img
                            src={item.pathName}
                            className='d-block w-100'
                            alt={item.title}
                        />
                    </Link>
                ))}
            </div>
            <button
                onClick={previousBtn}
                className='carousel-control-prev '
                type='button'>
                <span
                    className='carousel-control-prev-icon bg-info rounded-circle '
                    aria-hidden='true'></span>
                <span className='visually-hidden'>Previous</span>
            </button>
            <button
                onClick={nextBtn}
                className='carousel-control-next'
                type='button'>
                <span
                    className='carousel-control-next-icon bg-info rounded-circle'
                    aria-hidden='true'></span>
                <span className='visually-hidden'>Next</span>
            </button>
        </div>
    );
};

export default Carousel;
