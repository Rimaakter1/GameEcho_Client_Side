import { Link } from "react-router";

const ReviewsCard = ({ review }) => {

    const { _id, coverImage, gameDescription, gameRating, gameTitle, genre, year } = review;

    return (
        <div>
            <div className="card bg-base-100 w-96 shadow-xl">
                <figure className="px-10 pt-10">
                    <img
                        src={coverImage}
                        alt="Shoes"
                        className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{gameTitle}</h2>
                    <p>{gameDescription}</p>
                    <p>{genre}</p>
                    <p>{year}</p>
                    <div className="card-actions">
                        <Link to={`/review/${_id}`} className="btn btn-primary">Explore Details</Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReviewsCard;