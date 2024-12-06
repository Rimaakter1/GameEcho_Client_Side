import { useContext, useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";
import ReviewTableFormat from "../components/ReviewTableFormat/ReviewTableFormat";

const MyReviews = () => {

    const [myReviews, setMyReviews] = useState([]);
    const { user } = useContext(authContext);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?reviewerEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])

    return (
        <div>
            <h1> My Reviews </h1>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Favorite Color</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            myReviews.length > 0 && myReviews.map(myReview => <ReviewTableFormat key={myReview._id} myReview={myReview} myReviews={myReviews} setMyReviews={setMyReviews}></ReviewTableFormat>)
                        }
                    </tbody>

                </table>
            </div>

        </div>
    );
};

export default MyReviews;