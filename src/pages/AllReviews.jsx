import { useState, useEffect } from "react";
import { useLoaderData } from "react-router";
import ReviewsCard from "../components/ReviewsCard/ReviewsCard";
import Banner from "../components/Banner/Banner";
import banner from "../assets/reviewBanner.avif";

const AllReviews = () => {
    const allReviews = useLoaderData();
    const [sortBy, setSortBy] = useState('rating');
    const [genreFilter, setGenreFilter] = useState('');
    const [filteredReviews, setFilteredReviews] = useState(allReviews);

    const sortReviews = (reviews) => {
        return reviews.sort((a, b) => {
            if (sortBy === 'rating') {
                return a.gameRating - b.gameRating;
            } else if (sortBy === 'year') {
                return a.year - b.year;
            }
            return 0;
        });
    };

    const filterReviewsByGenre = () => {
        if (genreFilter) {
            return allReviews.filter(review => review.genre === genreFilter);
        }
        return allReviews;
    };

    useEffect(() => {
        let filtered = filterReviewsByGenre();
        filtered = sortReviews(filtered);
        setFilteredReviews(filtered);
    }, [sortBy, genreFilter, allReviews]);


    return (
        <div className="bg-cover bg-center object-cover" style={{ backgroundImage: `url(${banner})` }}>
            <Banner
                title="All Reviews"
                description="Explore reviews from fellow players. Discover their experiences, ratings, and feedback to help you make informed decisions before diving into your next game!"
            />
            <div className="mb-8 w-11/12 mx-auto flex items-center flex-col md:flex-row md:justify-between">
                <div className="flex  items-center gap-3">
                    <label className="block text-white font-medium">Filter by Genre</label>
                    <select
                        value={genreFilter}
                        onChange={(e) => setGenreFilter(e.target.value)}
                        name="genre"
                        className="px-4 py-2 border rounded-md focus:ring focus:ring-blue-300 focus:outline-none"
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

                <div className="dropdown ml-28 md:ml-0 mt-4 md:mt-0">
                    <div tabIndex={0} role="button" className="btn m-1 px-10 py-3">
                        Sort by
                    </div>
                    <div tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <button onClick={() => setSortBy('rating')}>Rating</button>
                        <button onClick={() => setSortBy('year')}>Year</button>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-1 gap-5 w-11/12 mx-auto md:grid-cols-2 lg:grid-cols-4 pb-24">
                {filteredReviews.length > 0 &&
                    filteredReviews.map((review) => (
                        <ReviewsCard key={review._id} review={review}></ReviewsCard>
                    ))}
            </div>
        </div>
    );
};

export default AllReviews;
