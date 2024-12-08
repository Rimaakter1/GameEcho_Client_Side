import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";
import Banner from "../components/Banner/Banner";
import reviewDetailsBanner from "../assets/reviewDetailsBanner.jpg"
import { Rating } from '@smastrom/react-rating'
import Swal from "sweetalert2";


const ReviewDetails = () => {

    const { user } = useContext(authContext);
    const review = useLoaderData();
    const { _id, coverImage, gameDescription, gameRating, gameTitle, genre, year, reviewerName, reviewerEmail } = review;


    const handleWatchList = () => {
        fetch('https://game-echo-server.vercel.app/watchlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...review, userName: user.displayName, userEmail: user.email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        icon: 'success',
                        title: 'Added to Wishlist!',
                        text: 'This item has been successfully added to your wishlist.',
                        confirmButtonText: 'OK'
                    });

                }
            })
    }

    return (
        <div className=" bg-cover bg-center pb-24"
            style={{ backgroundImage: `url(${reviewDetailsBanner})` }}>
            <Banner title="Review Details" description="Dive into the details of this game review. Learn what players think about gameplay, graphics, storyline, and overall experience!"></Banner>
            <div className="card card-side bg-white shadow-xl w-8/12 mx-auto">
                <figure className="w-1/2">
                    <img
                        src={coverImage}
                        alt={gameTitle}
                        className="w-full h-full p-6 object-cover rounded-lg"
                    />
                </figure>
                <div className="card-body w-1/2">
                    <h2 className="card-title text-xl font-bold">{gameTitle}</h2>
                    <p className="text-sm text-gray-500 mb-2">Genre: {genre}</p>
                    <p className="text-gray-700">{gameDescription}</p>
                    <div className="rating mt-2">
                        <span className="ml-1 font-medium">
                            <Rating style={{ maxWidth: 200 }} value={gameRating} readOnly />
                        </span>
                    </div>
                    <div className="divider"></div>
                    <p className="text-sm text-gray-600">
                        Reviewed by: <span className="font-semibold">{reviewerName}</span>
                    </p>
                    <p className="text-sm text-gray-600 mb-2">Email: {reviewerEmail}</p>
                    <button className="btn w-full bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 text-white" onClick={handleWatchList}>Add to WatchList</button>

                </div>
            </div>
        </div>
    );
};

export default ReviewDetails;