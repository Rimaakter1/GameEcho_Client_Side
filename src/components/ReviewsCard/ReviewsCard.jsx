import { Link } from "react-router";

const ReviewsCard = ({ review }) => {

    const { _id, coverImage, gameDescription, gameRating, gameTitle, genre, year } = review;

    return (

        <div className="card bg-[#191F2B] w-full shadow-xl hover:border hover:border-pink-400 hover:shadow-sm hover:shadow-pink-200">
            <figure className="px-5 pt-5">
                <img

                    src={coverImage}
                    alt="Shoes"
                    className="rounded-xl w-full h-[200px] bg-cover object-cover" />
            </figure>
            <div className="card-body items-center text-center">
                <p className="text-center text-purple-500 text-lg font-bold">{genre}</p>
                <h2 className="card-title text-white">{gameTitle}</h2>
                <p className="text-white">{gameDescription.split(" ").slice(0, 12).join(" ") + "…"}</p>
                <p className="text-white">Published Year: {year}</p>
                <div className="card-actions">
                    <Link to={`/review/${_id}`} className="btn bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 text-white border-none">Explore Details</Link>
                </div>
            </div>
        </div>

    );
};

export default ReviewsCard;