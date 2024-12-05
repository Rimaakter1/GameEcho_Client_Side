import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router";
import { authContext } from "../components/AuthProvider/AuthProvider";

const Register = () => {

    const { handleRegister, manageProfile } = useContext(authContext);
    const navigate = useNavigate();
    const [error, setError] = useState("");


    const handleSubmit = (e) => {
        e.preventDefault()
        setError("")
        const name = e.target.name.value
        const email = e.target.email.value
        const photo = e.target.photoUrl.value
        const password = e.target.password.value
        console.log(name, email, photo, password);
        if (password.length < 6) {
            setError("Password must contain at least 6 characters")
            return
        }
        if (!/[A-Z]/.test(password)) {
            setError("Password must contain at least one uppercase letter")
            return;
        }
        if (!/[a-z]/.test(password)) {
            setError("Password must contain at least one lowercase letter");
            return;
        }

        console.log(name, photo, email, password)


        handleRegister(email, password)
            .then(result => {
                manageProfile(name, photo)
                navigate('/')
            })
            .catch(err => {
                setError(err.message)
            })



    }




    return (
        <div className="w-6/12 mx-auto">
            <div>
                <div className="text-center lg:text-left my-10">
                    <h1 className="text-5xl font-bold">Register now!</h1>
                </div>
                <div className=" w-full shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input name="name" type="text" placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input name="email" type="email" placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">PhotoUrl</span>
                            </label>
                            <input name="photoUrl" type="url" placeholder="Photo" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input name="password" type="password" placeholder="password" className="input input-bordered" required />

                            <div>
                                <p>Already have an account? <Link to="/login">Login</Link></p>
                            </div>

                        </div>
                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary">Register</button>
                        </div>
                        <p className="text-red-500">{error}</p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;