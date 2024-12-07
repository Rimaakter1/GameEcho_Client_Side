import ReviewsCard from "../ReviewsCard/ReviewsCard";

const HighestRatedGame = ({ topRatedReviews }) => {

    return (
        <div>
            <h1>Highest Rated Game</h1>
            <div className="grid grid-cols-3 gap-5">
                {
                    topRatedReviews > 0 && topRatedReviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                }
            </div>
        </div>
    );
};

export default HighestRatedGame;