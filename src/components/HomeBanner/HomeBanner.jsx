import { Typewriter } from 'react-simple-typewriter';
import slider1 from '../../assets/slider-1.avif';
import slider2 from '../../assets/slider-2.jpg';
import slider3 from '../../assets/slider-3.jpg';
import slider4 from '../../assets/slider-4.jpg';
import { Link } from 'react-router';


const HomeBanner = () => {




    return (
        <div className="carousel w-full">
            <div id="slide1" className="carousel-item relative w-full">
                <div className="relative w-full h-screen">
                    <img
                        src={slider1}
                        className="w-full h-screen object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-black opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold  text-white font-Parkinsans">
                            Epic {' '}
                            <span style={{ color: 'red', fontWeight: 'bold' }}>
                                {/* Style will be inherited from the parent element */}
                                <Typewriter
                                    words={['Gameplay', 'Adventure', 'Storyline', 'Visuals']}
                                    loop={5}
                                    cursor
                                    cursorStyle=' '
                                    typeSpeed={70}
                                    deleteSpeed={50}
                                    delaySpeed={1000}
                                />
                            </span>

                            Reviews
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-52 md:max-w-2xl text-white">
                            Dive into the world of gaming with our in-depth reviews, ratings, and
                            insights. Explore the latest titles, uncover hidden gems, and relive
                            the classics.
                        </p>
                        <Link to="/reviews" className='btn px-9 py-2 text-lg font-semibold font-Parkinsans mt-6'> Explore Reviews</Link>
                    </div>
                </div>

                <div className="absolute left-1 right-1 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide4" className="btn btn-circle">❮</a>
                    <a href="#slide2" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide2" className="carousel-item relative w-full">
                <div className="relative w-full h-screen">
                    <img
                        src={slider2}
                        className="w-full h-screen object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-black opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold  text-white font-Parkinsans">
                            Spotlight on Innovation
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-52 md:max-w-2xl text-white">
                            Celebrate creativity and groundbreaking gameplay in our featured reviews.
                        </p>
                        <Link to="/reviews" className='btn px-9 py-2 text-lg font-semibold font-Parkinsans mt-6'> Explore Reviews</Link>
                    </div>
                </div>
                <div className="absolute left-1 right-1 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide1" className="btn btn-circle">❮</a>
                    <a href="#slide3" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide3" className="carousel-item relative w-full">
                <div className="relative w-full h-screen">
                    <img
                        src={slider3}
                        className="w-full h-screen object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-black opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold  text-white font-Parkinsans">
                            Master Every Challenge
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-52 md:max-w-2xl text-white">
                            Stay ahead with in-depth reviews on strategy, combat, and gameplay mechanics.

                        </p>
                        <Link to="/reviews" className='btn px-9 py-2 text-lg font-semibold font-Parkinsans mt-6'> Explore Reviews</Link>
                    </div>
                </div>
                <div className="absolute left-1 right-1 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide2" className="btn btn-circle">❮</a>
                    <a href="#slide4" className="btn btn-circle">❯</a>
                </div>
            </div>
            <div id="slide4" className="carousel-item relative w-full">
                <div className="relative w-full h-screen">
                    <img
                        src={slider4}
                        className="w-full h-screen object-cover" />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-black to-black opacity-70"></div>
                    <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                        <h1 className="text-4xl md:text-6xl font-bold  text-white font-Parkinsans">
                            Unleash the Hero Within
                        </h1>
                        <p className="mt-4 text-lg md:text-xl max-w-52 md:max-w-2xl text-white">
                            Dive into captivating stories, breathtaking graphics, and gameplay that redefines adventure. Read our expert reviews and uncover the best games.
                        </p>
                        <Link to="/reviews" className='btn px-9 py-2 text-lg font-semibold font-Parkinsans mt-6'> Explore Reviews</Link>
                    </div>
                </div>
                <div className="absolute left-1 right-1 md:left-5 md:right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                    <a href="#slide3" className="btn btn-circle">❮</a>
                    <a href="#slide1" className="btn btn-circle">❯</a>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;