import { useContext, useState } from "react";
import { useEffect } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";
import Banner from "../components/Banner/Banner";
import { Rating } from "@smastrom/react-rating";
import banner from "../assets/watchlistBanner.jpg";

const WatchList = () => {
    const { user } = useContext(authContext);
    const [watchlistData, setWatchlistData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/watchlist?userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setWatchlistData(data))
    }, [])


    return (
        <div className=" bg-cover bg-center pb-24"
            style={{ backgroundImage: `url(${banner})` }}>
            <Banner title="Your Watchlist" description="Keep track of your favorite games here. Explore, review, and revisit them anytime as you build your ultimate gaming collection!"></Banner>
            <div className="w-11/12 mx-auto bg-white bg-opacity-70 rounded-xl">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Game Title</th>
                            <th>Game Description</th>
                            <th>Genre</th>
                            <th>Published</th>
                            <th>Rating</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            watchlistData.length > 0 ? watchlistData.map(review => <tr key={review._id} className="text-black">
                                <td>
                                    <div className="flex items-center gap-3">
                                        <div className="avatar">
                                            <div className="mask mask-squircle h-12 w-12">
                                                <img
                                                    src={review.coverImage}
                                                    alt={review.gameTitle} />
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td>
                                    <div>
                                        <div className="font-bold">{review.gameTitle}</div>
                                        <div className="text-sm opacity-50"></div>
                                    </div>
                                </td>
                                <td>
                                    <p>{review.gameDescription}</p>
                                </td>
                                <td>
                                    <p>{review.genre}</p>
                                </td>
                                <td >
                                    <p>{review.year}</p>
                                </td>
                                <td>
                                    <Rating style={{ maxWidth: 150 }} value={review.gameRating} readOnly></Rating>
                                </td>
                            </tr>) : <p>Watchlist is empty</p>

                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default WatchList;