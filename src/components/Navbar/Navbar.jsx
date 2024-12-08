import { NavLink, useNavigate } from 'react-router';
import logo from '../../assets/logo.png'
import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Tooltip as ReactTooltip } from "react-tooltip";

const Navbar = () => {
    const navigate = useNavigate();

    const { user, logout } = useContext(authContext);
    console.log(user);


    const handleLogout = () => {
        logout()
            .then(res => {
                navigate('/')
            })
    }

    const links = <>
        <NavLink className={({ isActive }) =>
            isActive ? "text-red-400 font-bold" : "dark:text-white"
        } to="/">Home</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-red-400 font-bold" : "dark:text-white"
        } to="/reviews">All Reviews</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-red-400 font-bold" : "dark:text-white"
        } to="/addReview">Add Review</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-red-400 font-bold" : "dark:text-white"
        } to="/myReviews">My Reviews</NavLink>
        <NavLink className={({ isActive }) =>
            isActive ? "text-red-400 font-bold" : "dark:text-white"
        } to="/myWatchlist">Game WatchList</NavLink>
    </>



    return (
        <div>
            <div className="navbar bg-[#020817] py-4">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-white"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow bg-black">
                            {links}
                        </ul>
                    </div>
                    <img className='w-20' src={logo} alt="" />
                    <a className="font-bold text-2xl text-white font-Parkinsans">GameEcho</a>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 text-[16px] gap-5 font-Parkinsans">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end flex-col lg:flex-row gap-4">
                    {
                        user ? <>
                            <div className='bg-white p-2 rounded-full'>
                                <img data-tooltip-id="my-tooltip-1" className='w-6' src={user.photoURL} alt="" />
                            </div>


                            <button onClick={handleLogout} className='btn text-lg font-bold rounded-3xl px-8 py-2 border-none bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 text-white'>Logout</button>
                        </> : (
                            <>

                                <NavLink className={({ isActive }) =>
                                    isActive ? "bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 text-white font-bold btn rounded-3xl px-8 py-2 border-none text-lg" : "text-lg font-bold btn rounded-3xl px-8 py-2 border-none bg-white text-black"} to="/login">Login</NavLink>
                                <NavLink className={({ isActive }) =>
                                    isActive ? "bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 text-white font-bold btn rounded-3xl px-8 py-2 border-none text-lg" : "text-lg font-bold btn rounded-3xl px-8 py-2 border-none bg-white text-black"} to="/register">Register</NavLink>
                            </>
                        )
                    }

                </div>

            </div>
            <ReactTooltip
                id="my-tooltip-1"
                place="Top"
                content={user?.displayName}
                style={{ backgroundColor: "#FFFFFF", color: "#222", padding: "10px", fontWeight: 800 }}
            />

        </div>
    );
};

export default Navbar;