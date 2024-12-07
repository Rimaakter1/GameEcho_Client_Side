import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";
import loginImg from '../assets/loginReg.jpg';
import { FcGoogle } from "react-icons/fc";
import Swal from "sweetalert2";
import { toast } from "react-toastify";

const Login = () => {
    const { handleGoogleLogin, handleLogin } = useContext(authContext);
    const navigate = useNavigate();
    const location = useLocation();

    const googleLogin = () => {
        handleGoogleLogin();
        navigate('/');
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Logged in successfully with Google!",
            showConfirmButton: false,
            timer: 1500
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        handleLogin(email, password)
            .then(res => {
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Logged in successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(location?.state ? location.state : "/");
            })
            .catch(err => {
                toast.error(err.message)
            });
    };

    return (
        <div className="relative">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${loginImg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-70"></div>
            </div>

            <div className="relative z-10 py-16 px-6">
                <div className="w-6/12 bg-white bg-opacity-80 mx-auto mb-10 rounded-lg">
                    <div className="text-center my-8">
                        <h1 className="text-5xl font-bold pt-5">Login now!</h1>
                    </div>
                    <div className="w-full shadow-2xl rounded-2xl">
                        <form onSubmit={handleSubmit} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Email</span>
                                </label>
                                <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text text-lg font-bold">Password</span>
                                </label>
                                <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                            </div>
                            <div className="form-control mt-2">
                                <button type="submit" className="btn btn-primary">Login</button>
                            </div>
                            <div className="text-black text-lg text-center">
                                <p>Don't have an account? <Link to="/register" className="text-blue-500 underline">Register</Link></p>
                            </div>
                            <div>
                                <button className="btn text-lg w-full" onClick={googleLogin}><FcGoogle className="text-2xl"></FcGoogle>
                                    Login with Google</button>

                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;
