import { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(authContext);
    const location = useLocation();
    if (loading) {
        return <h1>loading</h1>;
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.pathname} to={"/login"}></Navigate>;
};

export default PrivateRoute;