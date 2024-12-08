import { FaEdit } from "react-icons/fa";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import PropTypes from 'prop-types';

const ReviewTableFormat = ({ myReview, myReviews, setMyReviews }) => {
    const { _id, coverImage, gameDescription, gameTitle, genre } = myReview;

    const handleDelete = (_id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://game-echo-server.vercel.app/review/${_id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your review has been deleted.",
                                icon: "success",
                            });

                            const remainingReview = myReviews.filter(
                                (myReview) => myReview._id !== _id
                            );
                            setMyReviews(remainingReview);
                        }
                    });
            }
        });
    };

    return (
        <tr className="border-b hover:bg-gray-100">
            <td className="px-2 py-2">
                <div className="flex items-center gap-3">
                    <div className="avatar">
                        <div className="rounded-xl h-12 w-12">
                            <img src={coverImage} alt={gameTitle} />
                        </div>
                    </div>
                </div>
            </td>
            <td className="px-2 py-2">
                <div>
                    <div className="font-bold">{gameTitle}</div>
                </div>
            </td>
            <td className="px-4 py-2 truncate max-w-xs ">
                {gameDescription}
            </td>
            <td className=" px-4 py-2">{genre}</td>
            <td className=" px-4 py-2 space-x-2 space-y-3">
                <Link
                    to={`/updateReview/${_id}`}
                    className="btn bg-green-400 text-xs px-4 py-2 border-none"
                >
                    Update <FaEdit />
                </Link>
                <button
                    onClick={() => handleDelete(_id)}
                    className="btn bg-red-500 text-white text-xs px-5 py-2 border-none"
                >
                    Delete <RiDeleteBin6Fill />
                </button>
            </td>
        </tr>
    );
};

ReviewTableFormat.propTypes = {
    myReview: PropTypes.object.isRequired,
    myReviews: PropTypes.array.isRequired,
    setMyReviews: PropTypes.func.isRequired,
}


export default ReviewTableFormat;
