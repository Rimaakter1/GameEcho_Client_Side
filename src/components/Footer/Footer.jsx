import { FaFacebook, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa';
import logo from '../../assets/logo.png';
import { IoLogoYoutube } from 'react-icons/io';

const Footer = () => {
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
                    <h6 className="footer-title">Support</h6>
                    <a className="link link-hover">My Account</a>
                    <a className="link link-hover">Community</a>
                    <a className="link link-hover">FAQ</a>
                    <a className="link link-hover">Contact Us</a>
                </nav>
                <nav className='flex flex-col gap-2'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Leadership</a>
                    <a className="link link-hover">Careers</a>
                    <a className="link link-hover">Legal Notice</a>
                </nav>
            </div>
            <aside className='dark:text-white text-center py-8'>
                <p>Copyright © {new Date().getFullYear()} - All right reserved by Rima Akter</p>
            </aside>
        </footer>
    );
};

export default Footer;