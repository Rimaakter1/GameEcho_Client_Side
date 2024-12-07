import { useLoaderData } from "react-router";
import ReviewsCard from "../components/ReviewsCard/ReviewsCard";
import Banner from "../components/Banner/Banner";
import banner from "../assets/reviewBanner.avif"

const AllReviews = () => {

    const allReviews = useLoaderData();

    return (
        <div className="bg-cover bg-center object-cover"
            style={{ backgroundImage: `url(${banner})` }}>
            <Banner title="All Reviews" description="Explore reviews from fellow players. Discover their experiences, ratings, and feedback to help you make informed decisions before diving into your next game!"></Banner>
            <div className="grid grid-cols-1 gap-5 w-11/12 mx-auto md:grid-cols-2 lg:grid-cols-3 pb-24">
                {
                    allReviews.length > 0 && allReviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;