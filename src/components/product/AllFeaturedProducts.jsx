import FeaturedProducts from "./FeaturedProducts";

const AllFeaturedProducts = () => {
    const PRODUCT_FEATURED = [
        {
            name: "NEW ARRIVAL",
            value: "NEW_ARRIVAL",
        },
        {
            name: "RECOMMENDED",
            value: "RECOMMENDED",
        },
        {
            name: "TOP RATED",
            value: "TOP_RATED",
        },
    ];

    return (
        <div>
            {PRODUCT_FEATURED.map((item) => (
                <>
                    <FeaturedProducts name={item.name} value={item.value} />
                </>
            ))}
        </div>
    );
};

export default AllFeaturedProducts;
