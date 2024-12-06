import { useContext } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";

const ReviewDetails = () => {
    const { user } = useContext(authContext);
    const review = useLoaderData();
    const { _id, coverImage, gameDescription, gameRating, gameTitle, genre, year } = review;


    const handleWatchList = () => {
        console.log('Adding to watchlist:', review); // Debugging

        console.log('added');
        fetch('http://localhost:5000/watchlist', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ ...review, userName: user.displayName, userEmail: user.email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');

                }
            })
        alert("added to the watchlist");
    }

    return (
        <div>
            <button onClick={handleWatchList}>Add to WatchList</button>
        </div>
    );
};

export default ReviewDetails;