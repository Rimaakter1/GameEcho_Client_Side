import { useContext, useEffect, useState } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";
import ReviewTableFormat from "../components/ReviewTableFormat/ReviewTableFormat";
import Banner from "../components/Banner/Banner";
import banner from "../assets/myReviewBanner.jpg"

const MyReviews = () => {

    const [myReviews, setMyReviews] = useState([]);
    const { user } = useContext(authContext);

    useEffect(() => {
        fetch(`http://localhost:5000/reviews?reviewerEmail=${user.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [])

    return (
        <div className="bg-cover bg-center object-cover pb-24"
            style={{ backgroundImage: `url(${banner})` }}>

            <Banner title="My Reviews" description="View and manage all the reviews you’ve submitted. Your feedback matters, and here you can see your thoughts on the games you've experienced!"></Banner>
            <div className="w-11/12 mx-auto bg-white rounded-xl bg-opacity-90">
                <table className="table">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Game Title</th>
                            <th>Game Description</th>
                            <th>Genre</th>
                            <th>Action</th>
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