import { useLoaderData } from "react-router";
import Banner from "../components/Banner/Banner";
import HighestRatedGame from "../components/HighestRatedGame/HighestRatedGame";

const Home = () => {
    const topRatedReviews = useLoaderData();
    console.log(topRatedReviews);
    return (
        <div>
            <Banner></Banner>
            <HighestRatedGame topRatedReviews={topRatedReviews}></HighestRatedGame>
        </div>
    );
};

export default Home;