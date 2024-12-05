import { useContext } from "react";
import { authContext } from "../components/AuthProvider/AuthProvider";

const AddReview = () => {


    const { user } = useContext(authContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        const coverImage = e.target.coverImage.value;
        const gameTitle = e.target.gameTitle.value;
        const gameRating = parseInt(e.target.rating.value);
        const gameDescription = e.target.reviewDescription.value;
        const year = e.target.publishingYear.value;
        const genre = e.target.genre.value;
        const newReview = { coverImage, gameDescription, year, genre, gameTitle, gameRating };
        fetch('http://localhost:5000/reviews', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newReview)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    console.log('successfully added');
                    e.target.reset();
                }
            })
        alert("Thank you for your review!");
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <form
                className="bg-white p-6 rounded-lg shadow-md w-full max-w-lg"
                onSubmit={handleSubmit}
            >
                <h2 className="text-2xl font-bold mb-4 text-gray-800">
                    Game Review Submission
                </h2>


                <div className="grid grid-cols-2 gap-5">
                    <div className="form-group mb-4">
                        <label className="block text-gray-700 font-medium">Game Cover Image (URL)</label>
                        <input
                            type="url"
                            name="coverImage"
                            placeholder="https://example.com/cover-image.jpg"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                            required
                        />
                    </div>


                    <div className="form-group mb-4">
                        <label className="block text-gray-700 font-medium">Game Title</label>
                        <input
                            type="text"
                            name="gameTitle"
                            placeholder="Enter the game title"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                            required
                        />
                    </div>


                    <div className="form-group mb-4">
                        <label className="block text-gray-700 font-medium">Review Description</label>
                        <textarea
                            name="reviewDescription"
                            placeholder="Write your review here..."
                            rows="4"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                            required
                        ></textarea>
                    </div>


                    <div className="form-group mb-4">
                        <label className="block text-gray-700 font-medium">Rating (1-10)</label>
                        <input
                            type="number"
                            name="rating"
                            min="1"
                            max="10"
                            placeholder="Enter a rating (1-10)"
                            className="w-full px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
                            required
                        />
                    </div>


                    <div className="form-group mb-4">
                        <label className="block text-gray-700 font-medium">Publishing Year</label>
                        <select
                            name="publishingYear"
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
                        <label className="block text-gray-700 font-medium">Genre</label>
                        <select
                            name="genre"
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

                    <div className="form-group mb-4">
                        <label className="block text-gray-700 font-medium">User Email</label>
                        <input
                            type="email"
                            value={user.email}
                            className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
                            readOnly
                        />
                    </div>
                    <div className="form-group mb-4">
                        <label className="block text-gray-700 font-medium">User Name</label>
                        <input
                            type="text"
                            value={user.displayName}
                            className="w-full px-4 py-2 border rounded-md bg-gray-100 cursor-not-allowed"
                            readOnly
                        />
                    </div>

                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 focus:ring focus:ring-blue-300"
                >
                    Submit Review
                </button>
            </form>
        </div>
    );
};

export default AddReview;
