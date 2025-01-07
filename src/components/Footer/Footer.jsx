import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { IoLogoYoutube } from 'react-icons/io';
import { NavLink } from 'react-router';
import { useContext } from 'react';
import { authContext } from '../AuthProvider/AuthProvider';

const Footer = () => {

    const { user } = useContext(authContext)

    return (
        <footer className='dark:bg-[#111827]'>
            <div className="flex flex-col lg:flex-row  justify-around dark:text-white py-10 px-8 lg:px-0 gap-10">
                <aside className='space-y-5'>
                    <img className='w-28' src={logo} alt="" />
                    <p className='text-lg font-Parkinsans'>
                        Join us for the best game reviews, updates, <br /> and exclusive content delivered regularly.
                    </p>
                    <div className='flex gap-4 text-4xl'>
                        <a href="https://www.facebook.com/"><FaFacebook /></a>
                        <a href="https://www.instagram.com/"><FaInstagramSquare /></a>
                        <a href="https://www.youtube.com/"><IoLogoYoutube /></a>
                        <a href="https://x.com/?lang=en"><FaTwitterSquare /></a>
                    </div>
                </aside>
                <nav className='flex flex-col gap-2'>
                    <h6 className="footer-title">Nav Links</h6>
                    <NavLink to="/" className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")}>
                        Home
                    </NavLink>
                    <NavLink to="/reviews" className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")}>
                        All Reviews
                    </NavLink>
                    {
                        user &&
                        <div className='space-y-2 flex flex-col'>
                            <NavLink to="/addReview" className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")}>
                                Add Review
                            </NavLink>
                            <NavLink to="/myReviews" className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")}>
                                My Reviews
                            </NavLink>
                            <NavLink to="/myWatchlist" className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")}>
                                Game WatchList
                            </NavLink>
                        </div>
                    }
                    <NavLink to="/support" className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")}>
                        Support
                    </NavLink>
                    <NavLink to="/contact" className={({ isActive }) => (isActive ? "text-red-400 font-bold" : "dark:text-white")}>
                        Contact
                    </NavLink>

                </nav>
                <form>
                    <h6 className="footer-title">Newsletter</h6>
                    <fieldset className="form-control w-80">
                        <label className="label">
                            <span className="label-text dark:text-white">Enter your email address</span>
                        </label>
                        <div className="join">
                            <input
                                type="text"
                                placeholder="username@site.com"
                                className="input input-bordered join-item" />
                            <button className="btn bg-gradient-to-r from-rose-300 via-purple-400  to-blue-300 join-item text-white">Subscribe</button>
                        </div>
                    </fieldset>
                </form>
            </div>
            <aside className='dark:text-white text-center py-8'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Rima Akter</p>
            </aside>
        </footer>
    );
};

export default Footer;