import { useContext, useState } from "react";
import { useEffect } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";
import ReviewsCard from "../components/ReviewsCard/ReviewsCard";
import Banner from "../components/Banner/Banner";

const WatchList = () => {
    const { user } = useContext(authContext);
    const [watchlistData, setWatchlistData] = useState([]);

    useEffect(() => {
        fetch(`http://localhost:5000/watchlist?userEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setWatchlistData(data))
    }, [])


    return (
        <div>
            <Banner title="Your Watchlist" description="Keep track of your favorite games here. Explore, review, and revisit them anytime as you build your ultimate gaming collection!"></Banner>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-11/12 mx-auto gap-5">
                {

                    watchlistData.length > 0 ? watchlistData.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>) : <p>Watchlist is empty</p>

                }
            </div>
        </div>
    );
};

export default WatchList;