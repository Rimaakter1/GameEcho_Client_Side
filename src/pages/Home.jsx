import { useLoaderData } from "react-router";
import HighestRatedGame from "../components/HighestRatedGame/HighestRatedGame";
import AboutUs from "../components/AboutUs/AboutUs";
import Newsletter from "../components/Newsletter/Newsletter";
import HomeBanner from "../components/HomeBanner/HomeBanner";

const Home = () => {
    const topRatedReviews = useLoaderData();

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
            <HomeBanner></HomeBanner>
            <AboutUs></AboutUs>
            <HighestRatedGame topRatedReviews={topRatedReviews}></HighestRatedGame>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;