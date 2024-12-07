import { useContext, useState } from "react";
import { useEffect } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";
import ReviewsCard from "../components/ReviewsCard/ReviewsCard";

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
            <h1>WatchList</h1>
            <div>
                {

                    watchlistData.length > 0 ? watchlistData.map(review => <ReviewsCard key={review._id} review={review}></ReviewsCard>) : <p>Watchlist is empty</p>

                }
            </div>
        </div>
    );
};

export default WatchList;