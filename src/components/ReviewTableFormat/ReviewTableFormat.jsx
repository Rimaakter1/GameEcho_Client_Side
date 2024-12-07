import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router";
import Swal from "sweetalert2";

const ReviewTableFormat = ({ myReview, myReviews, setMyReviews }) => {

    const { _id, coverImage, gameDescription, gameRating, gameTitle, genre, year } = myReview;


    const handleDelete = _id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/review/${_id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });

                            const remainingReview = myReviews.filter(myReview => myReview._id !== _id);
                            setMyReviews(remainingReview);

                        }
                    })

            }
        });

    }

    return (

        <tr className="text-black">
            <td>
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                            <img
                                src={coverImage}
                                alt={gameTitle} />
                        </div>
                    </div>
                </div>
            </td>
            <td>
                <div>
                    <div className="font-bold">{gameTitle}</div>
                    <div className="text-sm opacity-50"></div>
                </div>
            </td>
            <td>
                <p>{gameDescription}</p>
            </td>
            <td>
                <p>{genre}</p>
            </td>
            <th className="space-y-1">
                <Link to={`/updateReview/${_id}`} className="btn bg-green-300">Update <FaEdit />
                </Link>
                <button onClick={() => handleDelete(_id)} className="btn bg-red-500 text-white">Delete <RiDeleteBin6Fill />
                </button>
            </th>
        </tr>

    );
};

export default ReviewTableFormat;