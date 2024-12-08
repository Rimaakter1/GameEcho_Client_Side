import { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { authContext } from "../components/AuthProvider/AuthProvider";
import registerImg from '../assets/loginReg.jpg';
import { toast } from "react-toastify";
import Swal from "sweetalert2";

const Register = () => {
    const { handleRegister, manageProfile } = useContext(authContext);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const photo = e.target.photoUrl.value;
        const password = e.target.password.value;

        if (password.length < 6) {
            toast.error("Password must contain at least 6 characters")
            return;
        }
        if (!/[A-Z]/.test(password)) {
            toast.error("Password must contain at least one uppercase letter")
            return;
        }
        if (!/[a-z]/.test(password)) {
            toast.error("Password must contain at least one lowercase letter")
            return;
        }

        handleRegister(email, password)
            .then(result => {
                manageProfile(name, photo);
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "You have registered successfully!",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate('/');
            })
            .catch(err => {
                toast.error(err.message);
            });
    };

    return (
        <div className="relative">
            <div
                className="absolute inset-0 bg-cover bg-center z-0"
                style={{ backgroundImage: `url(${registerImg})` }}
            >
                <div className="absolute inset-0 bg-black opacity-50"></div>
            </div>

            <div className="relative z-10 py-16 px-1 lg:px-6">
                <div className="w-full md:w-10/12 lg:w-6/12 mx-auto bg-white bg-opacity-80 rounded-lg shadow-2xl p-8">
                    <div className="text-center my-4 lg:my-8">
                        <h1 className="text-4xl lg:text-5xl font-bold text-gray-900">Register Now!</h1>
                    </div>
                    <form onSubmit={handleSubmit} className="space-y-4">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input
                                name="name"
                                type="text"
                                placeholder="Enter your name"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input
                                name="email"
                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo URL</span>
                            </label>
                            <input
                                name="photoUrl"
                                type="url"
                                placeholder="Enter your photo URL"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input
                                name="password"
                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full"
                                required
                            />
                        </div>
                        <div className="form-control mt-6">
                            <button
                                type="submit"
                                className="btn btn-primary w-full py-3 text-xl font-semibold"
                            >
                                Register
                            </button>
                        </div>
                        <div className="text-center mt-4">
                            <p>Already have an account? <Link to="/login" className="text-blue-500 underline">Login</Link></p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
