import { useContext, useEffect, useState } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";
import ReviewTableFormat from "../components/ReviewTableFormat/ReviewTableFormat";
import Banner from "../components/Banner/Banner";
import banner from "../assets/myReviewBanner.jpg";
import Loading from "../components/Loading/Loading";

const MyReviews = () => {
    const [myReviews, setMyReviews] = useState([]);
    const { user } = useContext(authContext);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setLoading(true); 
        fetch(`https://game-echo-server.vercel.app/reviews?reviewerEmail=${user?.email}`)
            .then((res) => res.json())
            .then((data) => {
                setMyReviews(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching reviews:", error);
                setLoading(false);
            });
    }, [user.email]);

    return (
        <div
            className="bg-cover bg-center object-cover pb-24"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <Banner
                title="My Reviews"
                description="View and manage all the reviews you’ve submitted. Your feedback matters, and here you can see your thoughts on the games you've experienced!"
            ></Banner>

            <div className="w-11/12 mx-auto bg-white bg-opacity-70 rounded-xl p-4">
                {loading ? (
                    <div className="flex justify-center items-center py-8">
                        <Loading />
                    </div>
                ) : myReviews.length > 0 ? (
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full text-left">
                            <thead className="bg-gray-800 bg-opacity-60 text-white">
                                <tr>
                                    <th className="px-5 py-2"></th>
                                    <th className="px-4 py-2">Game Title</th>
                                    <th className="px-4 py-2">Game Description</th>
                                    <th className="px-4 py-2">Genre</th>
                                    <th className="px-12 py-3">Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {myReviews.map((myReview) => (
                                    <ReviewTableFormat
                                        key={myReview._id}
                                        myReview={myReview}
                                        myReviews={myReviews}
                                        setMyReviews={setMyReviews}
                                    ></ReviewTableFormat>
                                ))}
                            </tbody>
                        </table>
                    </div>
                ) : (
                    <p className="text-center text-gray-700 py-8">
                        You haven’t submitted any reviews yet. Start sharing your thoughts on games!
                    </p>
                )}
            </div>
        </div>
    );
};

export default MyReviews;
