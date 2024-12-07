import { useLoaderData } from "react-router";
import HighestRatedGame from "../components/HighestRatedGame/HighestRatedGame";
import AboutUs from "../components/AboutUs/AboutUs";
import Newsletter from "../components/Newsletter/Newsletter";
import HomeBanner from "../components/HomeBanner/HomeBanner";

const Home = () => {
    const topRatedReviews = useLoaderData();
    console.log(topRatedReviews);
    return (
        <div>
            <HomeBanner></HomeBanner>
            <AboutUs></AboutUs>
            <HighestRatedGame topRatedReviews={topRatedReviews}></HighestRatedGame>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;