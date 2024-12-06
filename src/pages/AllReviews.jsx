import { useLoaderData } from "react-router";
import ReviewsCard from "../components/ReviewsCard/ReviewsCard";

const AllReviews = () => {

    const allReviews = useLoaderData();
    console.log(allReviews);

    return (
        <div>
            <h1> All Reviews</h1>
            <div className="grid grid-cols-3">
                {
                    allReviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                }
            </div>
        </div>
    );
};

export default AllReviews;