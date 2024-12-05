import { Link, useNavigate } from 'react-router';
import logo from '../../assets/logo1.png'
import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';
import { Tooltip } from 'react-tooltip'

const Navbar = () => {
    const navigate = useNavigate();
    const { user, logout } = useContext(authContext);
    console.log(user);


const handleLogout=()=>{
    logout()
    .then(res=>{
        navigate('/')
    })
}

    const links = <>
        <Link to="/">Home</Link>
        <Link to="/all-reviews">All Reviews</Link>
        <Link to="/add-review">Add Review</Link>
        <Link to="/my-reviews">My Reviews</Link>
        <Link to="/game-watchlist">Game WatchList</Link>
    </>

    return (
        <div>
            <div className="navbar bg-[#262626]">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
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
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow text-[#FDFDFD]">
                            {links}
                        </ul>
                    </div>
                    <img className='w-20' src={logo} alt="" />
                    <a className="font-bold text-2xl text-[#FDFDFD]">GameEcho</a>
                </div>
                <div className="navbar-center">
                    <ul className="menu menu-horizontal px-1 text-[#FDFDFD] text-lg gap-3">
                        {links}
                    </ul>
                </div>
                <div className="navbar-end gap-4">
                    {
                        user ? <>
                            <img data-tooltip-id="my-tooltip" data-tooltip-content={user.displayName} className='w-9 rounded-full' src={user.photoURL} alt="" />
                            <button onClick={handleLogout} className='btn'>Logout</button>
                        </> : (
                            <>
                                <Link className='btn' to="/login">Login</Link>
                                <Link className='btn' to="/register">Register</Link>
                            </>
                        )
                    }
                </div>
            </div>
            <Tooltip id="my-tooltip" />

        </div>
    );
};

export default Navbar;