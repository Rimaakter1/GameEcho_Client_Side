import { useLoaderData } from "react-router";
import Banner from "../components/Banner/Banner";
import HighestRatedGame from "../components/HighestRatedGame/HighestRatedGame";
import AboutUs from "../components/AboutUs/AboutUs";
import Newsletter from "../components/Newsletter/Newsletter";

const Home = () => {
    const topRatedReviews = useLoaderData();
    console.log(topRatedReviews);
    return (
        <div>
            <Banner></Banner>
            <AboutUs></AboutUs>
            <HighestRatedGame topRatedReviews={topRatedReviews}></HighestRatedGame>
            <Newsletter></Newsletter>
        </div>
    );
};

export default Home;