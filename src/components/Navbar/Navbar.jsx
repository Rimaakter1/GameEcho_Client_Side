import { NavLink, useNavigate } from 'react-router';
import logo from '../../assets/logo.png';
import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Tooltip as ReactTooltip } from "react-tooltip";
import ThemeToggle from '../ThemeToggle';

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(authContext);

    const handleLogout = () => {
        logout().then(() => {
            navigate('/');
        });
    };

    const links = (
        <>
            <NavLink to="/" className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")}>
                Home
            </NavLink>
            <NavLink to="/reviews" className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")}>
                All Reviews
            </NavLink>
            <NavLink to="/addReview" className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")}>
                Add Review
            </NavLink>
            <NavLink to="/myReviews" className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")}>
                My Reviews
            </NavLink>
            <NavLink to="/myWatchlist" className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")}>
                Game WatchList
            </NavLink>
        </>
    );

    return (
        <div>
            <div className="lg:navbar dark:bg-[#111827] lg:py-5 pt-3 lg:pt-3">
                <div className="navbar-start flex">

                    <div className="flex items-center">
                        <img className="w-20" src={logo} alt="Logo" />
                        <a className="font-bold text-2xl dark:text-white font-Parkinsans">GameEcho</a>
                    </div>
                </div>
                <div className="navbar-center">
                    <ul className="menu lg:menu-horizontal px-1 text-[16px] ml-4 lg:ml-0 gap-5 font-Parkinsans mr-10">{links}</ul>
                </div>
                <div className="lg:navbar-end flex-col lg:flex-row gap-4">
                    {user ? (
                        <div className="flex items-center gap-2 justify-center py-4 lg:py-0">
                            <div className="bg-white p-2 rounded-full">
                                <img data-tooltip-id="my-tooltip-1" className="md:w-6 w-8" src={user.photoURL} alt="User" />
                            </div>
                            <button
                                onClick={handleLogout}
                                className="btn text-lg font-bold rounded-3xl px-8 py-2 border-none bg-gradient-to-r from-rose-300 via-purple-400 to-blue-300 text-white"
                            >
                                Logout
                            </button>
                        </div>
                    ) : (
                        <div className="flex items-center gap-2 justify-center py-4 lg:py-0">
                            <NavLink
                                to="/login"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-gradient-to-r from-rose-300 via-purple-400 to-blue-300 text-white font-bold btn rounded-3xl px-8 py-2 border-none text-lg"
                                        : "text-lg font-bold btn rounded-3xl px-8 py-2 border-none dark:bg-white text-black"
                                }
                            >
                                Login
                            </NavLink>
                            <NavLink
                                to="/register"
                                className={({ isActive }) =>
                                    isActive
                                        ? "bg-gradient-to-r from-rose-300 via-purple-400 to-blue-300 text-white font-bold btn rounded-3xl px-8 py-2 border-none text-lg"
                                        : "text-lg font-bold btn rounded-3xl px-8 py-2 border-none dark:bg-white text-black"
                                }
                            >
                                Register
                            </NavLink>
                        </div>
                    )}
                    <ThemeToggle></ThemeToggle>

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
