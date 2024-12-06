
const ReviewTableFormat = ({ myReview, myReviews, setMyReviews }) => {

    const { _id, coverImage, gameDescription, gameRating, gameTitle, genre, year } = myReview;



    const handleDelete = _id => {
        console.log(_id);
        fetch(`http://localhost:5000/reviews/${_id}`, {
            method: 'DELETE'
        })
            .then(res => res.json())
            .then(data => {
                const remainingReview = myReviews.filter(myReview => myReview._id !== _id);
                setMyReviews(remainingReview);
            })

    }




    return (

        <tr>
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={coverImage}
                                alt={gameTitle} />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{gameTitle}</div>
                        <div className="text-sm opacity-50"></div>
                    </div>
                </div>
            </td>
            <td>
                <p>{gameDescription}</p>
            </td>
            <td>Purple</td>
            <th>
                <button className="btn btn-ghost btn-xs">Update</button>
                <button onClick={() => handleDelete(_id)} className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>

    );
};

export default ReviewTableFormat;