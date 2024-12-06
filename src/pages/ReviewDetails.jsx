import { useLoaderData, useParams } from "react-router-dom";

const ReviewDetails = () => {
    const params = useParams();
    console.log(params.id);
    const data = useLoaderData();
    console.log(data);
    const { _id, coverImage, gameDescription, gameRating, gameTitle, genre, year } = review;



    return (
        <div>
            <button>Add to WatchList</button>
        </div>
    );
};

export default ReviewDetails;