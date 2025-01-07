import ReviewsCard from "../ReviewsCard/ReviewsCard";
import { Fade } from "react-awesome-reveal";
import PropTypes from 'prop-types';

const HighestRatedGame = ({ topRatedReviews }) => {
    return (
        <div className="pb-24">
            <Fade cascade headShake>
                <h2 className="dark:text-white font-bold text-center text-4xl pt-10 md:pt-12 lg:pt-20 font-Parkinsans">Highest Rated Game</h2>
                <p className="dark:text-white text-center w-full md:w-10/12 lg:w-8/12 mx-auto mt-4 mb-8">Experience the pinnacle of gaming with a title that combines breathtaking visuals, engaging gameplay, and a compelling story. This game has earned top accolades for its immersive world and groundbreaking mechanics.</p>
            </Fade>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 mx-auto">
                {
                    topRatedReviews.length > 0 && topRatedReviews.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>)
                }
            </div>
        </div>
    );
};

HighestRatedGame.propTypes = {
    topRatedReviews: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default HighestRatedGame;