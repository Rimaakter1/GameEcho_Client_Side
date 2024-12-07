import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";

const Login = () => {


    const { handleGoogleLogin, handleLogin } = useContext(authContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const location = useLocation();


    const googleLogin = () => {
        handleGoogleLogin();
        navigate('/')
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleLogin(email, password)
            .then(res => {
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                setError(err.message)
            })
    };



    return (
        <div className="w-6/12 mx-auto mb-10">
            <div>
                <div className="text-center lg:text-left my-10">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                </div>
                <div className=" w-full shadow-2xl rounded-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Login</button>
                        </div>
                        <div>
                            <p>Don't have an account? <Link to="/register">Register</Link></p>
                        </div>
                        <div>
                            <button className="btn btn-social btn-google" onClick={googleLogin}>Login with Google</button>
                            {error && <p className="text-red-500">{error}</p>}
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;