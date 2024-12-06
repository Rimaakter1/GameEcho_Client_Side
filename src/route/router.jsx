import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home";
import AllReviews from "../pages/AllReviews";
import AddReview from "../pages/AddReview";
import MyReviews from "../pages/MyReviews";
import WatchList from "../pages/WatchList";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ReviewDetails from "../pages/ReviewDetails";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('http://localhost:5000/topRatedReviews')
            },
            {
                path: "reviews",
                element: <AllReviews></AllReviews>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: "addReview",
                element: <PrivateRoute>
                    <AddReview></AddReview>
                </PrivateRoute>
            },
            {
                path: "myReviews",
                element: <PrivateRoute>
                    <MyReviews></MyReviews>
                </PrivateRoute>,
                loader: () => fetch('http://localhost:5000/reviews')
            },
            {
                path: "myWatchlist",
                element: <PrivateRoute>
                    <WatchList></WatchList>
                </PrivateRoute>
            },
            {
                path: "login",
                element: <Login></Login>
            },
            {
                path: "register",
                element: <Register></Register>
            },
            {
                path:"review/:id",
                element:<ReviewDetails></ReviewDetails>,
                loader: ({ params }) => fetch(`http://localhost:5000/reviews/${params.id}`)
            }


        ]
    },

]);

export default router;