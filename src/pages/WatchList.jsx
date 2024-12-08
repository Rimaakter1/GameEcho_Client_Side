import { useContext, useState, useEffect } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";
import Banner from "../components/Banner/Banner";
import { Rating } from "@smastrom/react-rating";
import banner from "../assets/watchlistBanner.jpg";

const WatchList = () => {
    const { user } = useContext(authContext);
    const [watchlistData, setWatchlistData] = useState([]);

    useEffect(() => {
        fetch(`https://game-echo-server.vercel.app/watchlist?userEmail=${user.email}`)
            .then((res) => res.json())
            .then((data) => setWatchlistData(data));
    }, []);

    return (
        <div
            className="bg-cover bg-center pb-24"
            style={{ backgroundImage: `url(${banner})` }}
        >
            <Banner
                title="Your Watchlist"
                description="Keep track of your favorite games here. Explore, review, and revisit them anytime as you build your ultimate gaming collection!"
            ></Banner>
            <div className="w-11/12 mx-auto bg-white bg-opacity-70 rounded-xl p-4">
                <div className="overflow-x-auto">
                    <table className="table-auto w-full text-left">
                        <thead className="bg-gray-800 bg-opacity-60 text-white">
                            <tr>
                                <th className="px-4 py-2"></th>
                                <th className="px-4 py-2">Game Title</th>
                                <th className="px-4 py-2">Description</th>
                                <th className="px-4 py-2">Genre</th>
                                <th className="px-4 py-2">Published</th>
                                <th className="px-4 py-2">Rating</th>
                            </tr>
                        </thead>
                        <tbody>
                            {watchlistData.length > 0 ? (
                                watchlistData.map((review) => (
                                    <tr
                                        key={review._id}
                                        className="border-b hover:bg-gray-100"
                                    >
                                        <td className="px-4 py-2">
                                            <div className="flex items-center gap-3">
                                                <div className="avatar">
                                                    <div className="rounded-xl h-12 w-12">
                                                        <img
                                                            src={review.coverImage}
                                                            alt={review.gameTitle}
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        </td>
                                        <td className="px-4 py-2">
                                            <div className="font-bold text-black">
                                                {review.gameTitle}
                                            </div>
                                        </td>
                                        <td className="px-4 py-2 text-gray-700 truncate max-w-xs">
                                            {review.gameDescription}
                                        </td>
                                        <td className="px-4 py-2 text-gray-700">{review.genre}</td>
                                        <td className="px-4 py-2 text-gray-700">{review.year}</td>
                                        <td className="px-4 py-2">
                                            <Rating
                                                style={{ maxWidth: 150 }}
                                                value={review.gameRating}
                                                readOnly
                                            />
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td
                                        colSpan="6"
                                        className="text-center text-gray-500 py-4"
                                    >
                                        Watchlist is empty
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default WatchList;
