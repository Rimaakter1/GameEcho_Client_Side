import { Rating } from "@smastrom/react-rating";
import { Link } from "react-router";
import PropTypes from 'prop-types';

const ReviewsCard = ({ review }) => {

    const { _id, coverImage, gameDescription, gameRating, gameTitle, genre, year } = review;

    return (

        <div className="card bg-[#191F2B] w-full shadow-xl hover:border hover:border-pink-400 hover:shadow-sm pb-3 hover:shadow-pink-200 ">
            <figure className="px-3 pt-3 relative">
                <img

                    src={coverImage}
                    alt="Shoes"
                    className="rounded-xl w-full h-[200px] bg-cover object-cover" />
            </figure>
            <div className="px-3 flex flex-col items-center text-center space-y-2">
                <p className="text-center bg-white rounded-lg p-2 top-40 left-4 text-purple-500 text-lg font-bold absolute">{genre}</p>
                <h2 className="card-title text-center text-white">{gameTitle}</h2>
                <p className="text-white">{gameDescription.split(" ").slice(0, 8).join(" ") + "…"}</p>
                <div className="flex flex-col items-center justify-between gap-3">
                    <p className="text-white">Published Year: {year}</p>
                    <Rating style={{ maxWidth: 100 }} value={gameRating}></Rating>
                </div>
                <div className=" w-full">
                    <Link to={`/review/${_id}`} className="btn bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 text-white border-none w-full mt-4">Explore Details</Link>
                </div>
            </div>
        </div>

    );
};

ReviewsCard.propTypes = {
    review: PropTypes.object.isRequired,
}


export default ReviewsCard;