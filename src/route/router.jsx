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
import UpdateReview from "../pages/UpdateReview";
import Page404 from "../pages/Page404";
import Contact from "../pages/Contact";
import Support from "../pages/Support";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Page404></Page404>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://game-echo-server.vercel.app/topRatedReviews')
            },
            {
                path: "reviews",
                element: <AllReviews></AllReviews>,
                loader: () => fetch('https://game-echo-server.vercel.app/reviews')
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
                loader: () => fetch('https://game-echo-server.vercel.app/reviews')
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
                path: "review/:id",
                element: <ReviewDetails></ReviewDetails>,
                loader: ({ params }) => fetch(`https://game-echo-server.vercel.app/review/${params.id}`)
            },
            {
                path: "updateReview/:id",
                element: <UpdateReview></UpdateReview>,
                loader: ({ params }) => fetch(`https://game-echo-server.vercel.app/review/${params.id}`)
            },
            {
                path: "contact",
                element: <Contact></Contact>

            },
            {
                path: "support",
                element: <Support></Support>
            }


        ]
    },

]);

export default router;