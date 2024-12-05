import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllReviews from "../pages/AllReviews";
import AddReview from "../pages/AddReview";
import MyReviews from "../pages/MyReviews";
import WatchList from "../pages/WatchList";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
            },
            {
                path: "all-reviews",
                element: <AllReviews></AllReviews>,
            },
            {
                path: "add-review",
                element: <AddReview></AddReview>
            },
            {
                path: "my-reviews",
                element: <MyReviews></MyReviews>
            },
            {
                path: "game-watchlist",
                element: <WatchList></WatchList>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            }


        ]
    },

]);

export default router;