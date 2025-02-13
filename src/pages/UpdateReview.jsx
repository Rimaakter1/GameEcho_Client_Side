import { useContext } from "react";
import Banner from "../components/Banner/Banner";
import { authContext } from "../components/AuthProvider/AuthProvider";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";
import banner from "../assets/updateReview.avif"
const UpdateReview = () => {


    const { user } = useContext(authContext);
    const review = useLoaderData();
    const { _id, coverImage, gameDescription, gameRating, gameTitle, genre, year } = review;

    const handleUpdateReview = e => {
        e.preventDefault();
        const coverImage = e.target.coverImage.value;
        const gameTitle = e.target.gameTitle.value;
        const gameRating = parseInt(e.target.rating.value);
        const gameDescription = e.target.reviewDescription.value;
        const year = e.target.publishingYear.value;
        const genre = e.target.genre.value;
        const reviewerName = user?.displayName;
        const reviewerEmail = user?.email;


        const updatedReview = { coverImage, gameDescription, year, genre, gameTitle, gameRating, reviewerName, reviewerEmail };

        fetch(`https://game-echo-server.vercel.app/review/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Review updated successfully',
                        icon: 'success',
                        confirmButtonText: 'Ok'
                    });

                }
            })


    }
    return (
        <div className=" bg-cover bg-center"
            style={{ backgroundImage: `url(${banner})` }}>
            <Banner title="Update Your Review" description="Edit your review and share your updated thoughts with us. Feel free to make any changes to your feedback."></Banner>
            <div className="flex items-center justify-center pb-24">
                <form
                    className="bg-black p-6 rounded-lg shadow-md w-8/12 mx-auto bg-opacity-100"
                    onSubmit={handleUpdateReview}
                >


                    <div className="grid grid-cols-2 gap-5">
                        <div className="form-group mb-4">
                            <label className="block text-white font-medium">User Email</label>
                            <input
                                type="email"
                                value={user?.email}
                                className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
                                readOnly
                            />
                        </div>
                        <div className="form-group mb-4">
                            <label className="block text-white font-medium">User Name</label>
                            <input
                                type="text"
                                value={user?.displayName}
                                className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
                                readOnly
                            />
                        </div>

                        <div className="form-group mb-4">
                            <label className="block text-white font-medium">Game Title</label>
                            <input
                                type="text"
                                name="gameTitle"
                                defaultValue={gameTitle}
                                placeholder="Enter the game title"
                                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                                required
                            />
                        </div>

                        <div className="form-group mb-4">
                            <label className="block text-white font-medium">Rating (1-5)</label>
                            <input
                                type="number"
                                name="rating"
                                min="1"
                                max="5"
                                defaultValue={gameRating}
                                placeholder="Enter a rating (1-5)"
                                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                                required
                            />
                        </div>


                        <div className="form-group mb-4">
                            <label className="block text-white font-medium">Publishing Year</label>
                            <select
                                name="publishingYear"
                                defaultValue={year}
                                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                                required
                            >
                                <option value="">Select Year</option>
                                {Array.from({ length: 50 }, (_, i) => new Date().getFullYear() - i).map((year) => (
                                    <option key={year} value={year}>
                                        {year}
                                    </option>
                                ))}
                            </select>
                        </div>


                        <div className="form-group mb-4">
                            <label className="block text-white font-medium">Genre</label>
                            <select
                                name="genre"
                                defaultValue={genre}
                                className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                                required
                            >
                                <option value="">Select Genre</option>
                                <option value="Action">Action</option>
                                <option value="RPG">RPG</option>
                                <option value="Adventure">Adventure</option>
                                <option value="Shooter">Shooter</option>
                                <option value="Sports">Sports</option>
                                <option value="Puzzle">Puzzle</option>
                                <option value="Simulation">Simulation</option>
                                <option value="Strategy">Strategy</option>
                                <option value="Fighting">Fighting</option>
                                <option value="Horror">Horror</option>
                            </select>
                        </div>



                    </div>
                    <div className="form-group mb-4">
                        <label className="block text-white font-medium">Game Cover Image (URL)</label>
                        <input
                            type="url"
                            name="coverImage"
                            defaultValue={coverImage}
                            placeholder="https://example.com/cover-image.jpg"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                            required
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block text-white font-medium">Review Description</label>
                        <textarea
                            name="reviewDescription"
                            defaultValue={gameDescription}
                            placeholder="Write your review here..."
                            rows="4"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 text-white py-2 px-4 rounded-md text-lg font-bold"
                    >
                        Update Review
                    </button>
                </form>
            </div>
        </div>
    );
};

export default UpdateReview;